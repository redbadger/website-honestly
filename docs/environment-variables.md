Environment Variables
=====================

This site uses several environment variables. These are set in `.env` in dev.
In prod they are set in `circle.yml`, deploy scripts, and in CircleCI's
secrets vault.


## `ENVIRONMENT_NAME`

A name used to make the stack unique. Prod's is `prod`. Staging's is
`staging`. Mine is `louis`.


## `CONTACT_US_EMAIL_TO`

The email address that contact requests will be sent to.


## `CONTACT_US_SUPPORT_EMAIL`

The email address that AWS Lambda error notifications will be sent to.


## `INSERT_TRACKING`

If set Google Analytics tracking scripts will be inserted into the page.
