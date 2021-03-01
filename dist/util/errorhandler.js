"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errors_1 = require("./errors");
exports.errorHandler = function (error, _, res, next) {
    console.log('burda');
    console.error(error.stack);
    if (error instanceof errors_1.ApplicationError) {
        return res.status(error.status).json({
            message: error.message,
        });
    }
    return next(error);
};
//# sourceMappingURL=errorhandler.js.map