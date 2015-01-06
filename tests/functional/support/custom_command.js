define([
    'intern/dojo/node!leadfoot/Command',
], function (Command) {
    return (function () {

        function CustomCommand() {
            var InternalCustomCommand = this.InternalCustomCommand = function InternalCustomCommand() {
                Command.apply(this, arguments);
            }
            InternalCustomCommand.prototype = Object.create(Command.prototype);
            InternalCustomCommand.prototype.constructor = this.InternalCustomCommand;

            InternalCustomCommand.extendWith = function (functionObject) {
                for (var name in functionObject) {
                    if (functionObject.hasOwnProperty(name)) {
                        this.addCommand(name, functionObject[name]);
                    }
                }
                return this;
            };

            InternalCustomCommand.addCommand = function (name, func) {
                InternalCustomCommand.prototype[name] = function() {
                    var args = arguments;
                    return new InternalCustomCommand(this, function () {
                        return func.apply(this, args)
                    });
                }
            };


            return InternalCustomCommand;

        }

        return CustomCommand;
    })();
});