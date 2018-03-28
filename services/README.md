Publish Service
===============

This is an service based on AWS Lambda and other AWS resources.

When the lambda is triggered it fetches the latest data from Badger Brain,
recompiles the site using the site-compiler code, and then uploads it to AWS
S3.

In the unlikely event that an error occurs, it is worth bearing in mind that errors return with a `200` code to the user, and an email will be sent to the address specified in `LAMBDA_ERROR_REPORT_EMAIL`.
