const users = [
  { name: "LipinhoFire", idade: 39 },
  { name: "ColomboFire", idade: 57 },
  { name: "LeonFire", idade: 29 },
  { name: "FalshionFire", idade: 34 },
];

class UserController {
  getUsers = (request, response) => {
    response.send(users);
  };
  createUser = (request, response) => {
    const { name, idade } = request.body;

    const newUser = { name, idade };
    users.push(newUser);
    response.sendStatus(200).send(newUser);
  };
  deleteUser = (reuqest, response) => {};
  getUserById = (reuqest, response) => {};
}
const userController = new UserController();

export default userController;
