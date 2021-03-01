"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEntity = exports.Player = void 0;
var mongoose_1 = require("mongoose");
var nanoid_1 = require("nanoid");
exports.Player = {
    toDTO: function (player) { return ({
        id: player.id,
        price: player.price,
        data: player.data,
    }); },
};
var PlayerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: function () { return nanoid_1.nanoid(6); },
    },
    geniusSportsId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
    },
    data: {
        type: Object,
        required: false,
    },
});
exports.PlayerEntity = mongoose_1.model('Player', PlayerSchema);
//# sourceMappingURL=Player.js.map