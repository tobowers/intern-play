Intern Functional Tests with Selenoum WebDriver Example
===========

This is a sample setup showing how to run WebDriver tests with Intern.

# Installation
1. Clone this repo
1. run `npm install` to install the Node dependencies.
1. Start your Selenium Server (if you wish to use a non-default port or host you can set these in intern.js with a 'webdriver' key )
1. Run ` ./node_modules/.bin/intern-runner config=tests/intern.js`

# Notes
* Be sure to use `./node_modules/.bin/intern-runner` and not `./node_modules/.bin/intern-client`

# Links
*  https://github.com/theintern/intern/wiki/Running-your-own-WebDriver-server
