const express = require("express");
const { database } = require("../../config");

const StudentRouter = express.Router();

StudentRouter.post("/", async (req, res) => {
  try {
    const student = await database("students").insert(req.body).returning("*");
    res.send(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

StudentRouter.get("/", async (req, res) => {
  try {
    const students = await database("students").select("*");
    res.send(students);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

StudentRouter.get("/:id", async (req, res) => {
  try {
    const students = await database("students").where("id", req.params.id);
    res.send(students);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

StudentRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await database("students")
      .where("id", id)
      .update(req.body)
      .returning("*");
    res.send(student);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

StudentRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await database("students")
      .where("id", id)
      .del()
      .returning("*");
    res.send(student);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = StudentRouter;
