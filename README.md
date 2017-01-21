# Expense Tracker Backend

Simple REST API that can be used as a backend for the Expense Tracker app in the Ionic 2 by Example course.

This project uses Node/[Express](http://expressjs.com/) and [SQLite](http://sqlite.org/).

## Usage

1. Download and unpack this project
2. Run `npm install` from inside the project folder to download the dependencies
3. Run `node backend-without-auth.js` to start the API server, without request authentication
4. Run `node backend-with-auth.js` to start the API server, enabling request authentication with [JWT](https://jwt.io/)

## API

The API allows the following requests:

* `GET /expenses/` returns a JSON array with all expenses
* `GET /expenses/123` returns a JSON object for the expense with id `123`
* `POST /expenses/` creates a new expense. The request body should be a JSON object with the expense details
* `PUT /expenses/123` updates the expense with id `123`
* `DELETE /expenses/123` deletes the expense with id `123`

The `backend-with-auth.js` script additionally supports:

* `POST /token` accepts a JSON object containing `username` and `password` and returns an access token based on the [JWT](https://jwt.io/) standard
