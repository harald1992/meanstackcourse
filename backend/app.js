// const app = require("express");
import express from "express"; // you can use import statements because type="module" in package.json
import { cwd } from "process";
import fs from "fs";
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("First Middleware in express");
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

app.get("*", (req, res) => {
  // const Posts
});

export default app;
