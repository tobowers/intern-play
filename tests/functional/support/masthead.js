define([
    'intern/dojo/node!leadfoot/Command',
    'intern/dojo/node!leadfoot/helpers/pollUntil'
], function (Command, pollUntil) {
    return (function () {
        function CustomCommand() {
            Command.apply(this, arguments);
        }
        CustomCommand.prototype = Object.create(Command.prototype);
        CustomCommand.prototype.constructor = CustomCommand;

        CustomCommand.prototype.typeIntoSearch = function(doctorName) {
            return new this.constructor(this, function (){
                return this.parent
                    .findById('q')
                    .click()
                    .type(doctorName)
                    .end()
            });
        };

        CustomCommand.prototype.typeIntoLocation = function(location) {
            return new this.constructor(this, function () {
                return this.parent
                    .findById('location_text')
                    .click()
                    .type(location.toString())
                    .end()
            });
        };

        CustomCommand.prototype.doSearch = function() {
            return new this.constructor(this, function () {

                return this.parent
                    .findById('provider-go')
                    .click()
                    .then(pollUntil('return (/search/).test(window.location.path)', 5000))
                    .end()
            });
        };

        var Masthead = function(page) {
            this.page = new CustomCommand(page);
        };

        Masthead.prototype.searchFor = function (doctorName, opts) {
            return this.page
                .typeIntoSearch(doctorName)
                .typeIntoLocation(opts.near)
                .doSearch()
        };

        return Masthead;
    })();
});