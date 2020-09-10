import { MailTrapMailProvider } from '../../providers/Implementations/MailTrapMailProvider';
import { PostgresUsersRepository } from '../../repositorios/IMplementations/PostgresUsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const postgresUsersRepository = new PostgresUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
