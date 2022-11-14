"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const directory_schema_1 = require("./directory.schema");
const todo_schema_1 = require("./todo.schema");
const TodoRoutes = (0, express_1.Router)();
TodoRoutes.post("/list", async (req, res) => {
    const data = await todo_schema_1.Todo.find();
    res.status(200).send(data);
});
TodoRoutes.post("/create", async (req, res) => {
    try {
        const newTodo = new todo_schema_1.Todo(req.body);
        await newTodo.save();
        res.status(201).send(newTodo);
    }
    catch {
        res.status(500).send({ message: "Somthing went Wrong" });
    }
});
TodoRoutes.post("/move-to-directory", async (req, res) => {
    try {
        const newTodo = new directory_schema_1.Directory(req.body);
        await newTodo.save();
        res.status(201).send(newTodo);
    }
    catch {
        res.status(500).send({ message: "Somthing went Wrong" });
    }
});
TodoRoutes.post("/mark-as-done", async (req, res) => {
    try {
        const updatedInfo = await todo_schema_1.Todo.findByIdAndUpdate({ _id: req.body._id }, { ...req.body, status: true }, { new: true });
        res.status(200).send({ message: "Todo Updated" });
    }
    catch {
        res.status(500).send({ message: "Not Updated" });
    }
});
TodoRoutes.post("/mark-as-not-done", async (req, res) => {
    try {
        const updatedInfo = await todo_schema_1.Todo.findByIdAndUpdate({ _id: req.body._id }, { ...req.body, status: false }, { new: true });
        res.status(200).send({ message: "Todo Updated" });
    }
    catch {
        res.status(500).send({ message: "Not Updated" });
    }
});
TodoRoutes.post("/remove", async (req, res) => {
    const data = await todo_schema_1.Todo.findByIdAndDelete(req.body._id);
    res.send(data);
});
exports.default = TodoRoutes;
