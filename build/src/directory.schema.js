"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
const mongoose_1 = require("mongoose");
const DirectorySchema = new mongoose_1.Schema({
    todo: String,
    status: Boolean,
});
exports.Directory = (0, mongoose_1.model)("checkDirectory", DirectorySchema);
