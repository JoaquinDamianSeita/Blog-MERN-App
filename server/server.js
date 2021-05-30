const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = 3001;
const MONGODB_URI = "mongodb://localhost:27017/blog-app-db";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

app.use(
  session({
    secret: "Nuestro pequeño secreto.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});
