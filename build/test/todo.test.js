"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../src/index");
const globals_1 = require("@jest/globals");
(0, globals_1.test)("Test add todo in data", async () => {
    await (0, supertest_1.default)(index_1.app).post("/todo")
        .send({
        todo: "test",
        status: false
    })
        .expect(201);
});
(0, globals_1.test)("Test todo get", async () => {
    await (0, supertest_1.default)(index_1.app).get("/todo")
        .expect(201);
});
