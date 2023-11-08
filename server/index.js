const express = require("express");
const app = express();
require("dotenv").config();
const { people, candidates } = require("./data");
const PORT = process.env.PORT;
const cors = require("cors");
const fs = require("fs");
const path = require("path");
let user_choices = [];

app.use(cors());
// app.use(json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/users", (req, res) => {
  res.status(200).json(people);
});

app.get("/api/candidates", (req, res) => {
  res.status(201).json(candidates);
});

app.post("/api/voted_result", express.json(), (req, res) => {
  console.log(`req.body : ${req.body}`);
  const { result } = req.body;

  user_choices = [];
  const values = Object.values(result);
  console.log(`values : ${values}`);
  const show = Object.values(values);
  show.forEach((each) => {
    console.log(each);
    user_choices.push(each);
    console.log(`user_choices: ${user_choices}`);
  });

  if (result) {
    return res
      .status(201)
      .json({ success: true, msg: "Submitted successfully !", data: result });
  }

  res.status(400).json({ success: false, msg: "Failed to submit !" });
});

app.get("/voting_result", (req, res) => {
  res
    .status(201)
    .sendFile(path.resolve(__dirname, "./components/consequence.html"));
});

app.get("/style.css", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./components/style.css"));
});

app.get("/logic.js", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./components/logic.js"));
});

app.get("/review.js", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "./components/reviews/review.js"));
});

app.get("/choices", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "./components/reviews/review.html"));
});

app.get("/api/sendBackUserChoices", express.json(), (req, res) => {
  console.log(user_choices.length);
  res.status(200).json({ success: true, data: user_choices });
});

user_choices = [];

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
