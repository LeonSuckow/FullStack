import express from "express";
import userController from "../users/users-controller";

const routes = express.Router();

routes.get("/users", userController.getUsers);

routes.get("/users/:id", userController.getUserById);

routes.post("/users", userController.createUser);

routes.delete("/users/:id", userController.deleteUser);

const userRouter = { routes };

export default userRouter;
