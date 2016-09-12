Publish Service
===============

This is an service based on AWS Lambda and other AWS resources.

When the lambda is triggered it fetches the latest data from Badger Brain,
recompiles the site using the site-compiler code, and then uploads it to AWS
S3.
