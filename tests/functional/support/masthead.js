define([
    'intern/dojo/node!leadfoot/Command',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    './custom_command'
], function (Command, pollUntil, CustomCommand) {
    return (function () {
        var Masthead = new CustomCommand()

        Masthead.extendWith({
            typeIntoSearch: function(doctorName) {
                    return this.parent
                        .findById('q')
                        .click()
                        .type(doctorName)
                        .end();
            },
            typeIntoLocation: function (location) {
                return this.parent
                    .findById('location_text')
                    .click()
                    .type(location.toString())
                    .end();
            },
            doSearch: function () {
                return this.parent
                    .findById('provider-go')
                    .click()
                    .then(pollUntil('return (/search/).test(window.location.path)', 5000))
                    .end();
            },
            searchFor: function (doctorName, opts) {
                return this.parent
                    .typeIntoSearch(doctorName)
                    .typeIntoLocation(opts.near)
                    .doSearch()
            }
        });

        return Masthead;
    })();
});