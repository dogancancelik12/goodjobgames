"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var mongoose_1 = require("mongoose");
var PlayerSchema = new mongoose_1.Schema({
    user_id: {
        type: String
    },
    display_name: {
        type: String,
    },
    points: {
        type: Number,
    },
    rank: {
        type: Number,
    }
});
exports.Player = mongoose_1.model('Player', PlayerSchema);
//# sourceMappingURL=Player.js.map