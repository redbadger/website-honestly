BIN=./bin
PUBLISH_SERVICE=$(BIN)/publish-service.sh

NBIN=./node_modules/.bin
WEBPACK=$(BIN)/webpack.sh
MOCHA=$(NBIN)/mocha
ESLINT=$(NBIN)/eslint
WEBPACK_DEV_SERVER=$(NBIN)/webpack-dev-server

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt


clean: ## Remove compiled files
	rm -rf dist


install: ## Install deps
	npm install


dev: ## Run the frontend dev server
	$(WEBPACK_DEV_SERVER)


test: ## Run the tests
	$(MOCHA)


test-watch: ## Run the tests and watch for changes
	$(MOCHA) --reporter min --watch


build: dist/publish-service.zip ## Compile project


lint: ## Lint Javascript files
	$(ESLINT) . --ext .js --ext .jsx --ignore-path .gitignore --cache


dist/publish-service.zip: dist/publish-service
	cd dist/publish-service && zip -r ../publish-service.zip *


dist/publish-service:
	$(WEBPACK)


publish-service-deploy: dist/publish-service.zip ## Upload the publish service to AWS Lambda
	$(PUBLISH_SERVICE) deploy


publish-service-invoke: ## Invoke the publish service
	$(PUBLISH_SERVICE) invoke


.PHONY: \
	help \
	clear \
	build \
	badger \
	publish-service-deploy \
	publish-service-invoke \
	test \
	test-watch
