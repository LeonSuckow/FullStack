interface User {
  id: number;
  name: string;
  idade: number;
}

let users: User[] = [
  { id: 1, name: "LipinhoFire", idade: 39 },
  { id: 2, name: "ColomboFire", idade: 57 },
  { id: 3, name: "LeonFire", idade: 29 },
  { id: 4, name: "FalshionFire", idade: 34 },
];

class UserService {
  getUsers = () => {
    return users;
  };
  createUsers = (newUser: { name: string; idade: number }) => {
    const savedUser = { ...newUser, id: users[users.length - 1].id + 1 };
    users.push(savedUser);

    return savedUser;
  };

  deleteUser = (id: number) => {
    users = users.filter((user) => user.id !== id);
  };
  getUserById = (id: number) => {
    return users.find((user) => user.id === id);
  };
}

const userService = new UserService();

export default userService;
