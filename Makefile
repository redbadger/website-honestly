BIN=./bin

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt

deploy-publish-service: ## Deploy the publish service to AWS Lambda
	$(BIN)/deploy-publish-service.sh

.PHONY: \
	help \
	badger \
	deploy-publish-service
