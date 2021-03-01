"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    config: function (app) {
        // Set user in response to use in next middlewares.
        app.use(function (req, res, next) {
            // TODO: Verify user from Database and Set in the res.locals object to make it available in the next middlewares.
            // res.locals.user = req.user;
            next();
        });
    },
};
//# sourceMappingURL=custom.middleware.js.map