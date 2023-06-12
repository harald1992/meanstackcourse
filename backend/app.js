// const app = require("express");
import express from "express"; // you can use import statements because type="module" in package.json
import { cwd } from "process";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json()); // parse incoming json data. if Content-Type = application/json

// middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // which domains are allowed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept" // incoming request may have these headers  //
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  // console.log("First Middleware in express");
  // res.send("res send from express");
  next();
});

app.get("/api/appdata", (req, res) => {
  const dbJson = fs.readFileSync(`${cwd()}/backend/mockedData.json`, "utf8");
  res.send(dbJson);
});

app.post("/api/login", (req, res) => {
  const body = req.body;

  if (body.username === "harry" && body.password === "lala") {
    res.send("Access Authorized");
  } else {
    res.status(401).send("Bad Request");
  }
});

app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: 0,
      title: "First server-side post",
      body: "This is coming from the server",
    },
    {
      id: 1,
      title: "server-side post 2",
      body: "This is also coming from the server",
    },
  ];

  res.status(200).json(posts);
});

app.post("/api/posts", (req, res) => {
  const body = req.body;

  res.status(201).json();
});

app.get("*", (req, res) => {
  res.status(400).send();
});

export default app;
