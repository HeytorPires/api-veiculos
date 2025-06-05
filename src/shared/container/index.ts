import { container } from 'tsyringe';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { IVehicleRepository } from '@modules/vehicles/domain/repositories/IVehiclesRepository';
import VehicleRepository from '@modules/vehicles/infra/typeorm/repositories/VehiclesRepository';
import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';

container.registerSingleton<IVehicleRepository>(
  'VehiclesRepository',
  VehicleRepository
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
);
container.registerSingleton<IUserTokensRepository>(
  'UsersTokensRepository',
  UserTokensRepository
);
