import express from "express";
// const greeting = require("./utils/greeting.js");

// greeting.saudacao();

const app = express();
const port = 3333;

app.get("/", (request, response) => {
  response.send("");
});

app.listen(port, () => {
  console.log(`Application running localhost:${port}`);
});
