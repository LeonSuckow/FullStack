import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import userRepository from "./user-repository";

class UserService {

  getUsers = async () => {
    return userRepository.getUsers();
  };

  createUsers = async (newUser: { name: string; idade: number }) => {
    const savedUser = userRepository.createUsers(newUser);

    return savedUser;
  };

  deleteUser = async (id: number) => {
    const user = await this.getUserById(id);
    if (!user) {
      throw new ResourceNotFoundError();
    }

    await userRepository.deleteUser(id);
  };

  getUserById = async (id: number) => {
    return userRepository.getUserById(id);
  };
}

const userService = new UserService();

export default userService;
