define([
    'intern!object',
    'intern/chai!assert'
], function (registerSuite, assert) {

    registerSuite({
        'a test': function () {
            return this.remote
                .get('http://github.com')
                .findByTagName('h1')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Build software better, together.');
                });
        }
    });
});