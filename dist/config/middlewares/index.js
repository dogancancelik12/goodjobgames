"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parsers_middleware_1 = require("./parsers.middleware");
var custom_middleware_1 = require("./custom.middleware");
// Web Related Middleware Depends on req.session (express-session/cookie-session)
// import lusca from './lusca.middleware';
var config = function (app) {
    parsers_middleware_1.default.config(app);
    custom_middleware_1.default.config(app);
};
exports.default = { config: config };
//# sourceMappingURL=index.js.map