#!/bin/sh

BIN=./bin
LOAD_ENV=source bin/load-dotenv.sh && source bin/construct-additional-env.sh
WEBPACK=yarn webpack --bail
MOCHA=yarn mocha
PRETTIER=yarn prettier --write --print-width 100 --single-quote --trailing-comma all --parser babylon '{!(dist)/,!(dist)/**/}*.js'
ESLINT=yarn eslint
SERVERLESS=cd services && yarn sls
WEBPACK_DEV_SERVER=yarn webpack-dev-server
NPM_CHECK_UPDATES=yarn ncu

FORCE_COLOURS=script -q /dev/null

# color output
NO_COLOR=\033[0m
OK_COLOR=\033[32;01m
ERROR_COLOR=\033[31;01m
WARN_COLOR=\033[33;01m

OK_STRING=$(OK_COLOR)[OK]$(NO_COLOR)
ERROR_STRING=$(ERROR_COLOR)[ERRORS]$(NO_COLOR)
WARN_STRING=$(WARN_COLOR)[WARNINGS]$(NO_COLOR)

AWK_CMD = awk '{ printf "%-30s %-10s\n",$$1, $$2; }'
PRINT_LINE = printf "%0.s*" {1..50} && printf "\n"
PRINT_ERROR = printf "$(ERROR_COLOR)$@ $(ERROR_STRING)\n" | $(AWK_CMD) && printf "$(CMD)\n$$LOG\n" && false && $(PRINT_LINE)
PRINT_WARNING = printf "$(WARN_COLOR)$@ $(WARN_STRING)\n" | $(AWK_CMD) && printf "$(CMD)\n$$LOG\n" && $(PRINT_LINE)
PRINT_OK = printf "$(OK_COLOR)$@ $(OK_STRING)\n" | $(AWK_CMD) && $(PRINT_LINE)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

badger: ## Red Badger 4 lyfe!
	$(FORCE_COLOURS) npm run badger

clean: ## Remove compiled files
	rm -rf dist
	@$(PRINT_OK)

clean/services:
	rm -rf dist/services
	rm -f dist/services.zip
	@$(PRINT_OK)

check-deps: ## Check deps for updates
	$(NPM_CHECK_UPDATES)
	@$(PRINT_OK)

dev: badger ## Run the frontend dev server
	$(LOAD_ENV) && $(WEBPACK_DEV_SERVER) --color --hot --config webpack.dev.browser.config.js
	@$(PRINT_OK)

fetch:
	$(LOAD_ENV) && node dev/content-fetcher

generate-sitemap:
	$(LOAD_ENV) && node dev/generate-sitemap

dev-static: dist/static-site dist/dev-static/index.js ## Compile the site to HTML locally and serve
	ln -fs ../assets-honestly dist/static-site/assets-honestly
	node dist/dev-static/index.js
	./node_modules/.bin/http-server ./dist/static-site -p 8000
	@$(PRINT_OK)

dev-commit: dist/static-site dist/dev-static/index.js ## Compile the site to HTML locally
	node dist/dev-static/index.js
	@$(PRINT_OK)

test: ## Run the tests
	FORCE_COLOR=1 $(MOCHA)
	@$(PRINT_OK)

flow: ## Run the type checker
	yarn flow
	@$(PRINT_OK)

prettier: ## Run the prettifier
	$(PRETTIER)
	@$(PRINT_OK)

test-watch: ## Run the tests and watch for changes
	$(MOCHA) --reporter min --watch
	@$(PRINT_OK)

build: dist/services.zip ## Compile project used in CI deploy
	@$(PRINT_OK)

build-all: dist/services.zip dist/dev-static/index.js ## Compile project
	@$(PRINT_OK)

lint: ## Lint Javascript files
	FORCE_COLOR=1 $(ESLINT) . --ext .js --ext .jsx --ignore-path .eslintignore --cache
	@$(PRINT_OK)

services-deploy: dist/services.zip ## Upload the publish service to AWS Lambda
	$(LOAD_ENV) \
	&& $(SERVERLESS) deploy
	@$(PRINT_OK)

services-invoke-publish:
	$(LOAD_ENV) \
	&& $(SERVERLESS) invoke -f publish
	@$(PRINT_OK)

publish-service-invoke: ## Invoke the publish service
	$(LOAD_ENV) \
	&& curl -XPOST --fail $$PUBLISH_ENDPOINT
	@$(PRINT_OK)

keyrings: ## Initialize blackbox secrets in the keyrings folder (required to get .env file)
	git clone git@github.com:redbadger/blackbox-secrets.git keyrings -b website-honestly
	@echo ""
	@echo "*************************************************************"
	@echo "* Follow the instructions to get added to the blackbox admins:"
	@echo "* https://github.com/redbadger/blackbox-secrets/blob/master/README.md"
	@echo "*************************************************************"
	@echo ""
	@read -p "Press any key to continue."
	@$(PRINT_OK)

update-secrets: keyrings ## Update .env file to latest versionea
	cd keyrings \
	&& git pull
	blackbox_edit_start keyrings/files/.env
	mv keyrings/files/.env .env
	@$(PRINT_OK)

edit-secrets: keyrings update-secrets ## Edit .env file (get latest -> decrypt -> edit -> encrypt -> push)
	blackbox_edit keyrings/files/.env
	cd keyrings \
	&& git commit -m "files/.env.gpg updated" "files/.env.gpg" \
	&& git push origin website-honestly
	blackbox_edit_start keyrings/files/.env
	mv keyrings/files/.env .env
	@$(PRINT_OK)

compress-assets: ## Compress assets. What did you expect? :)
	find site -type f \
			\( \
				-name '*.png' \
				-o -name '*.jpg' \
				-o -name '*.jpeg' \
			\) \
			-exec sh -c '\
				echo {} \
				&& cat {} | yarn imagemin > {}.min \
				&& mv {}.min {}' \;
	find site -type f \
		-name '*.svg' \
		-exec sh -c '\
			echo {} \
			&& yarn svgo {} -q --enable=removeTitle' \;
	@$(PRINT_OK)

dist/services.zip: dist/services
	cd dist/services \
	&& zip -r ../services.zip *
	@$(PRINT_OK)

dist/services:
	export NODE_ENV=production \
	&& $(LOAD_ENV) \
	&& $(WEBPACK) --config webpack.lambda.config.js \
	&& $(WEBPACK) --config webpack.browser.config.js \
	&& rm -rf dist/services/assets-honestly
	@$(PRINT_OK)

dist/dev-static/index.js:
	export NODE_ENV=production \
	&& $(LOAD_ENV) \
	&& $(WEBPACK) --config webpack.dev.static.config.js
	@$(PRINT_OK)

dist/static-site:
	mkdir -p ./dist/static-site
	@$(PRINT_OK)


.PHONY: \
	dev \
	dev-static \
	install \
	check-deps \
	flow \
	prettier \
	lint \
	help \
	clear \
	build \
	badger \
	services-deploy \
	services-invoke \
	fetch \
	test \
	test-watch \
	sw \
	update-secrets \
	edit-secrets
