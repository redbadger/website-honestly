BIN=./bin
SERVICES=$(BIN)/services.sh
NBIN=./node_modules/.bin
WEBPACK=$(BIN)/webpack.sh
MOCHA=$(NBIN)/mocha
ESLINT=$(NBIN)/eslint
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


dev: badger ## Run the frontend dev server
	$(WEBPACK_DEV_SERVER) --hot --inline --config webpack.dev.browser.config.js


dev-static: dist/static-site dist/dev-static/index.js ## Compile the site to HTML locally and serve
	ln -fs ../assets-honestly dist/static-site/assets-honestly
	node dist/dev-static/index.js
	ruby -run -ehttpd ./dist/static-site -p8000


test: ## Run the tests
	$(MOCHA)


test-watch: ## Run the tests and watch for changes
	$(MOCHA) --reporter min --watch


build: dist/services.zip dist/dev-static/index.js ## Compile project


lint: ## Lint Javascript files
	$(ESLINT) . --ext .js --ext .jsx --ignore-path .gitignore --cache


services-deploy: dist/services.zip ## Upload the publish service to AWS Lambda
	$(SERVICES) deploy


publish-service-invoke: ## Invoke the publish service
	$(SERVICES) invoke


dist/services.zip: dist/services
	cd dist/services && zip -r ../services.zip *


dist/services:
	$(WEBPACK) webpack.lambda.config.js


dist/dev-static/index.js:
	$(WEBPACK) webpack.dev.static.config.js


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
	test-watch
