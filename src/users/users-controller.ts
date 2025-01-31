import { Request, Response } from "express";
import userService from "./users-service";

class UserController {
  getUsers = (request: Request, response: Response) => {
    const users = userService.getUsers();
    response.send(users);
  };
  createUser = (request: Request, response: Response) => {
    const { name, idade } = request.body;
    const newUser = { name, idade };
    const savedUser = userService.createUsers(newUser);

    response.status(201).send(savedUser);
  };
  deleteUser = (request: Request, response: Response) => {
    const { id } = request.params;
    userService.deleteUser(parseInt(id));
    response.sendStatus(200);
  };
  getUserById = (request: Request, response: Response) => {
    const { id } = request.params;
    const user = userService.getUserById(Number(id));

    response.status(200).send(user);
  };
}
const userController = new UserController();

export default userController;
