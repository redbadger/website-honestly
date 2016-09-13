BIN=./bin
PUBLISH_SERVICE=$(BIN)/publish-service.sh

NBIN=./node_modules/.bin
WEBPACK=$(NBIN)/webpack --bail

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt


clean: ## Remove compiled files
	rm -rf dist


install: ## Install deps
	npm install


dev: ## Run the frontend dev server
	@echo "Oops... This doesn't exist yet... :("


build: dist/publish-service.zip ## Compile project


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
	publish-service-invoke
