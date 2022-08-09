const express = require("express");
const { database } = require("../../config");

const BookRouter = express.Router();

BookRouter.post("/", async (req, res) => {
  try {
    const book = await database("books").insert(req.body).returning("*");
    res.send(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

BookRouter.get("/", async (req, res) => {
  try {
    const books = await database("books").select("*");
    res.send(books);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

BookRouter.get("/:id", async (req, res) => {
  try {
    const books = await database("books").where("id", req.params.id);
    res.send(books);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

BookRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await database("books")
      .where("id", id)
      .update(req.body)
      .returning("*");
    res.send(book);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

BookRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await database("books").where("id", id).del().returning("*");
    res.send(book);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

BookRouter.patch("/borrow/:id", async (req, res) => {
  try {
    const book = await database("books")
      .where("id", req.params.id)
      .update({
        borrowedBy: req.body.student,
        expectedReturnDate: req.body.returnDate,
      })
      .returning("*");
    res.send(book);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = BookRouter;
