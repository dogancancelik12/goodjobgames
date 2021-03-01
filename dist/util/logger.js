"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.timestamp(), winston_1.format.simple()),
    transports: [new winston_1.transports.Console()],
});
//# sourceMappingURL=logger.js.map