"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
    todo: String,
    status: Boolean,
});
exports.Todo = (0, mongoose_1.model)("checkTodo", TodoSchema);
