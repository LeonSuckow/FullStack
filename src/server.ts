import express from "express";

const app = express();
const port = 3333;

const users = [
  { name: "LipinhoFire", idade: 39 },
  { name: "ColomboFire", idade: 57 },
  { name: "LeonFire", idade: 29 },
  { name: "FalshionFire", idade: 34 },
];

const userRouter = express.Router();

userRouter.get("/user", (request, response) => {
  response.send(users);
});

userRouter.post("/user", (request, response) => {
  const { name, idade } = request.body;

  const newUser = { name, idade };
  users.push(newUser);
  response.sendStatus(200).send(newUser);
});

userRouter.delete("/user/:id", (reuqest, response) => {});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Application running http://localhost:${port} 🚀🚀🚀`);
});
