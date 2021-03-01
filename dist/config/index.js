"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convict_1 = require("convict");
convict_1.default.addFormats(require('convict-format-with-validator'));
convict_1.default.addFormats(require('convict-format-with-moment'));
var config = convict_1.default({
    environment: {
        doc: 'The application environment.',
        format: ['production', 'staging', 'development'],
        default: 'production',
        env: 'NODE_ENV',
    },
    host: {
        doc: 'The IP address to bind.',
        format: 'ipaddress',
        default: '0.0.0.0',
        env: 'HOST',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 9090,
        env: 'PORT',
    },
});
exports.default = config;
//# sourceMappingURL=index.js.map