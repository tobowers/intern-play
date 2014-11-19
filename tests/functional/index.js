define([
    'intern!object',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/helpers/pollUntil'
], function (registerSuite, assert, pollUntil) {

    registerSuite({
        'a test': function () {
            return this.remote
                .get('http://vitals.com')
                .findById('q')
                .click()
                .type('abraham')
                .end()
                .findById('location_text')
                .click()
                .type('11215')
                .end()
                .findById('provider-go')
                .click()
                .then(pollUntil('return (/search/).test(window.location.path)', 5000))
                .end()
                .findByCssSelector('.searchsentence .q')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'abraham');
                });
        }
    });
});