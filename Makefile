BIN=./bin
PUBLISH_SERVICE=$(BIN)/publish-service.sh

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt

clean: ## Remove compiled files
	rm -r dist

publish-service-deploy: ## Upload the publish service to AWS Lambda
	$(PUBLISH_SERVICE) deploy

publish-service-invoke: ## Invoke the publish service
	$(PUBLISH_SERVICE) invoke

.PHONY: \
	help \
	clear \
	badger \
	publish-service-deploy \
	publish-service-invoke
