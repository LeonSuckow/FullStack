import { Request, Response } from "express";
import userService from "./users-service";

class UserController {
  getUsers = async (request: Request, response: Response) => {
    const users = await userService.getUsers();
    response.send(users);
  };
  createUser = async (request: Request, response: Response) => {
    const { name, idade } = request.body;
    const newUser = { name, idade };
    const savedUser = await userService.createUsers(newUser);

    response.status(201).send(savedUser);
  };
  deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    await userService.deleteUser(parseInt(id));
    response.sendStatus(200);
  };
  getUserById = async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = await userService.getUserById(Number(id));

    response.status(200).send(user);
  };
}
const userController = new UserController();

export default userController;
