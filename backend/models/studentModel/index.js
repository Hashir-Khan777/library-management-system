const { database } = require("../../config");

const Student = async () =>
  await database.schema.hasTable("students").then((exists) => {
    if (!exists) {
      return database.schema.createTableIfNotExists("students", (table) => {
        table.increments();
        table.string("firstname").notNullable();
        table.string("lastname").notNullable();
        table.timestamps(true, true);
      });
    }
  });

module.exports = Student;
