"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const directory_schema_1 = require("./directory.schema");
const DiretoryRoutes = (0, express_1.Router)();
DiretoryRoutes.post("/list", async (req, res) => {
    const data = await directory_schema_1.Directory.find();
    res.status(200).send(data);
});
DiretoryRoutes.post("/create", async (req, res) => {
    try {
        const newDirectory = new directory_schema_1.Directory(req.body);
        await newDirectory.save();
        res.status(201).send(newDirectory);
    }
    catch {
        res.status(500).send({ message: "Somthing went Wrong" });
    }
});
DiretoryRoutes.post("/remove", async (req, res) => {
    const data = await directory_schema_1.Directory.findByIdAndDelete(req.body._id);
    res.send(data);
});
exports.default = DiretoryRoutes;
