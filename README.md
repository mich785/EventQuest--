# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

client id: oyZPgKrcnrDuFq6XGqnm2FosFbgGmJAg9RUeCkIKswlRgzxZDZ1-8Q
access token: huaBV1i2PDR4BEQy2k6a1Ed501uwAabqWISCswkW

curl "https://api.predicthq.com/v1/events/?category=concerts&country=KE" \
-H "Accept: application/json" \
-H "Authorization: Bearer $ACCESS_TOKEN"

curl "https://api.predicthq.com/v1/events/?category=sports&country=KE&updated.undefined=2023-07-09" \
        -H "Accept: application/json" \
        -H "Authorization: Bearer $ACCESS_TOKEN"