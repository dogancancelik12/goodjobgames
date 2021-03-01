"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var mongoose_1 = require("mongoose");
var ScoreShema = new mongoose_1.Schema({
    user_id: {
        type: String
    },
    score_worth: {
        type: Number,
    },
    timestamp: {
        type: Number,
    },
});
exports.Score = mongoose_1.model('Score', ScoreShema);
//# sourceMappingURL=Score.js.map