const { database } = require("../../config");

const Book = async () =>
  await database.schema.hasTable("books").then((exists) => {
    if (!exists) {
      return database.schema.createTableIfNotExists("books", (table) => {
        table.increments();
        table.string("name").notNullable();
        table.string("author").notNullable();
        table.string("borrowedBy").defaultTo(null);
        table.datetime("expectedReturnDate").defaultTo(null);
        table.timestamps(true, true);
      });
    }
  });

module.exports = Book;
