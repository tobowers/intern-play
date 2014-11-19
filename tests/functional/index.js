define([
    'intern!object',
    'intern/dojo/node!leadfoot/helpers/pollUntil'
], function (registerSuite, pollUntil) {

    registerSuite({
        'a test': function () {
            return this.remote
                .get('http://github.com')
                .then(pollUntil('return window.ready;', 5000));
        }
    });
});