import userRepository from "./user-reposityory";

class UserService {
  getUsers = () => {
    return userRepository.getUsers();
  };
  createUsers = (newUser: { name: string; idade: number }) => {
    const savedUser = userRepository.createUsers(newUser);

    return savedUser;
  };

  deleteUser = (id: number) => {
    const user = this.getUserById(id);
    if (!user) {
      throw new Error("User not found");
    }

    userRepository.deleteUser(id);
  };
  getUserById = (id: number) => {
    return userRepository.getUserById(id);
  };
}

const userService = new UserService();

export default userService;
