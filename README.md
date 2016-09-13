Website. Honestly.
==================

Red Badger Website Episode 6: Return of the Jedi.


## Usage

```sh
make         # Print the help
make install # Install the deps
make dev     # Run the dev server

# Deploy to dev lambda environment
make clean publish-service-deploy

# Invoke dev lambda
make publish-service-invoke
```


## Technical Overview

This site is a static site hosted on AWS S3 behind AWS Cloudfront.

The React template system is used to compile the pages, and it is run on AWS
Lambda.
