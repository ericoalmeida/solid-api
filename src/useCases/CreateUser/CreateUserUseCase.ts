import { IUsersRepository } from '../../repositorios/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe ERGDevs',
        email: 'equipe_ergdevs@devs.com.br'
      },
      subject: 'Boas-vindas',
      body: 'Sejam bem-vindos a equipe'
    });
  }
}

/**
 * Principios do S.O.L.I.D. aplicados:
 * S - Single responsability principle
 *   Esta classe possui uma unica funcionalidade de criar o usuário.
 *
 *
 * L - Liskov substitution principle:
 *   O Repositorio de usuarios foi implementado utilizando um interface,
 * com isso, a implementacao pode ser substituida em qualquer momento, desde que respeite
 * os metodos da interface.
 *
 *
 * D - Dependency inversion principle:
 *   Essa classe não depende diretamente da implementação de comunicação
 * com o banco de dados
 */
