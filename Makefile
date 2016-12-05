SHELL:=/bin/bash

BIN=./bin
LOAD_ENV=source bin/load-dotenv.sh && source bin/construct-additional-env.sh
NBIN=./node_modules/.bin
WEBPACK=$(NBIN)/webpack --bail
MOCHA=$(NBIN)/mocha
ESLINT=$(NBIN)/eslint
SERVERLESS=cd services && .$(NBIN)/sls
WEBPACK_DEV_SERVER=$(NBIN)/webpack-dev-server
NPM_CHECK_UPDATES=$(NBIN)/ncu

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt


clean: ## Remove compiled files
	rm -rf dist


check-deps: ## Check deps for updates
	$(NPM_CHECK_UPDATES)


dev: badger dist/sw.js ## Run the frontend dev server
	$(LOAD_ENV) && $(WEBPACK_DEV_SERVER) --hot --inline --config webpack.dev.browser.config.js --content-base dist/


sw: dist/sw.js  ## Compile service worker

fetch:
	export BABEL_ENV=node && \
	$(LOAD_ENV) && \
	node dev/content-fetcher

dev-static: dist/static-site dist/dev-static/index.js dist/sw.js ## Compile the site to HTML locally and serve
	ln -fs ../assets-honestly dist/static-site/assets-honestly
	cp dist/sw.js dist/static-site/sw.js
	node dist/dev-static/index.js
	ruby -run -ehttpd ./dist/static-site -p8000


test: ## Run the tests
	$(MOCHA)


test-watch: ## Run the tests and watch for changes
	$(MOCHA) --reporter min --watch


build: dist/services.zip dist/dev-static/index.js dist/sw.js ## Compile project


lint: ## Lint Javascript files
	$(ESLINT) . --ext .js --ext .jsx --ignore-path .eslintignore --cache


services-deploy: dist/services.zip ## Upload the publish service to AWS Lambda
	$(LOAD_ENV) \
	&& $(SERVERLESS) deploy

publish-service-invoke: ## Invoke the publish service
	$(LOAD_ENV) \
	&& curl -XPOST --fail $$PUBLISH_ENDPOINT

compress-assets: ## Compress assets. What did you expect? :)
	find site -type f \
			\( \
				-name '*.png' \
				-o -name '*.jpg' \
				-o -name '*.jpeg' \
			\) \
			-exec sh -c '\
				echo {} \
				&& cat {} | $(NBIN)/imagemin > {}.min \
				&& mv {}.min {}' \;
	find site -type f \
		-name '*.svg' \
		-exec sh -c '\
			echo {} \
			&& $(NBIN)/svgo {} -q --enable=removeTitle' \;


dist/sw.js:
	export NODE_ENV=production \
	&& $(LOAD_ENV) \
	&& $(WEBPACK) --config webpack.sw.config.js


dist/services.zip: dist/services
	cd dist/services \
	&& zip -r ../services.zip *


dist/services:
	export NODE_ENV=production \
	export BABEL_ENV=node && \
	&& $(LOAD_ENV) \
	&& $(WEBPACK) --config webpack.lambda.config.js


dist/dev-static/index.js:
	export NODE_ENV=production \
	&& $(LOAD_ENV) \
	&& $(WEBPACK) --config webpack.dev.static.config.js


dist/static-site:
	mkdir -p ./dist/static-site

.PHONY: \
	dev \
	dev-static \
	install \
	check-deps \
	lint \
	help \
	clear \
	build \
	badger \
	services-deploy \
	services-invoke \
	test \
	test-watch \
	sw
