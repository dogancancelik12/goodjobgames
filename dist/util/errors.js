"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = exports.NotFoundError = exports.ApplicationError = exports.impossible = exports.invalid = void 0;
exports.invalid = function () {
    throw new Error('Invalid input');
};
exports.impossible = function () {
    throw new Error('Unreachable code');
};
var ApplicationError = /** @class */ (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(message) {
        if (message === void 0) { message = 'An unexpected error has occurred'; }
        var _this = _super.call(this, message) || this;
        _this.status = 500;
        return _this;
    }
    return ApplicationError;
}(Error));
exports.ApplicationError = ApplicationError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        if (message === void 0) { message = 'Resource not found'; }
        var _this = _super.call(this, message) || this;
        _this.status = 404;
        return _this;
    }
    return NotFoundError;
}(ApplicationError));
exports.NotFoundError = NotFoundError;
var BadRequest = /** @class */ (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(message) {
        if (message === void 0) { message = 'Invalid input supplied'; }
        var _this = _super.call(this, message) || this;
        _this.status = 400;
        return _this;
    }
    return BadRequest;
}(ApplicationError));
exports.BadRequest = BadRequest;
//# sourceMappingURL=errors.js.map