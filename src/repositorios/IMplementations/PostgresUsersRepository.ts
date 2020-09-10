import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(usr => usr.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}

export { PostgresUsersRepository };
