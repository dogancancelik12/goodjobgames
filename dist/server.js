"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var chalk = require('chalk');
/**
 * Start Express server.
 */
var server = app_1.createApp().then(function (app) {
    return app.listen(app.get('port'), function () {
        console.log("\n " + chalk.gray('App is running at') + " " + chalk.cyan('http://%s:%d') + " " + chalk.gray('in') + " " + chalk.blue('%s') + " " + chalk.green('mode'), app.get('host'), app.get('port'), app.get('env'));
        console.log(" " + chalk.gray('Press') + " " + chalk.red('CTRL-C') + " " + chalk.gray('to stop.\n'));
    });
});
exports.default = server;
//# sourceMappingURL=server.js.map