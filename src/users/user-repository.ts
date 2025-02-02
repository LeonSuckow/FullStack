import { myDataSource } from "../datasource";
import { User } from "./user-entity";

class UserRepository {
  getUsers = async () => {
    return (await this.getRepository()).find()
  };

  createUsers = async (newUser: { name: string; idade: number }) => {
    const newEntity = new User(newUser.name, newUser.idade)
    return (await this.getRepository()).save(newEntity)
  };

  deleteUser = async (id: number) => {
    await (await this.getRepository()).delete({id: id})
  };

  getUserById = async (id: number) => {
    return (await this.getRepository()).findBy({id: id})
  };

  private async getRepository() {
    return myDataSource.getRepository(User);
  }
}

const userRepository = new UserRepository();

export default userRepository;
