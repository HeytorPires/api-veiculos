import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';

export interface IUserRepository {
  findByName(name: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  list(): Promise<IUser[] | undefined>;
  create(data: ICreateUser): Promise<IUser>;
  save(customer: IUser): Promise<IUser>;
  remove(customer: IUser): Promise<void>;
}
