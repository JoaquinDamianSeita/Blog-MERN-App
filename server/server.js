const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");

const app = express();
const MONGODB_URI = "mongodb://localhost:27017/blog-app-db";

const port = Process.env.PORT || serverPort;

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", router);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

//------------------------mongoose------------------
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);


mongoose.connection.once("open", function () {
  console.log("Connected to the Database.");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongoose Connection Error : " + error);
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}.`);
});
