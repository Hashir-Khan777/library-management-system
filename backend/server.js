const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const AppRouter = require("./routers");
const models = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

for (const model in models) {
  models[model]();
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", AppRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(process.env.PORT || 4000, () => console.log("Server is listening"));
