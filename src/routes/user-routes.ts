import express from "express";

const routes = express.Router();

const users = [
  { name: "LipinhoFire", idade: 39 },
  { name: "ColomboFire", idade: 57 },
  { name: "LeonFire", idade: 29 },
  { name: "FalshionFire", idade: 34 },
];

routes.get("/user", (request, response) => {
  response.send(users);
});

routes.post("/user", (request, response) => {
  const { name, idade } = request.body;

  const newUser = { name, idade };
  users.push(newUser);
  response.sendStatus(200).send(newUser);
});

routes.delete("/user/:id", (reuqest, response) => {});

const userRouter = { routes };

export default userRouter;
