import { Request, Response } from 'express';
import CreateUserService from '../../../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUsers = container.resolve(CreateUserService);

    const user = await createUsers.execute({ name, email, password });

    response.json(instanceToInstance(user));
    return;
  }
}
