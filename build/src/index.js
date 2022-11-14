"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// console.log("Hello World")
const express_1 = __importDefault(require("express"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const directory_routes_1 = __importDefault(require("./directory.routes"));
const port = 8000;
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use("/todo-item", todo_routes_1.default);
exports.app.use("/directory", directory_routes_1.default);
exports.app.get("/", (req, res) => {
    res.send("Hello world");
});
exports.app.listen(process.env.PORT || port, async () => {
    await mongoose_1.default.connect(`mongodb+srv://chetan:12345@cluster0.4jf6kcr.mongodb.net/?retryWrites=true&w=majority`);
    console.log(`App start on ${port}`);
});
