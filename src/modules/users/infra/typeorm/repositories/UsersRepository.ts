import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { ICreateUser } from '../../../domain/models/ICreateUser';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({ email, password });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }

  public async remove(user: User): Promise<void> {
    await this.ormRepository.remove(user);
  }

  public async list(): Promise<User[] | undefined> {
    const user = await this.ormRepository.find();
    return user;
  }
  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { name } });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { id } });
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }
}

export default UsersRepository;
