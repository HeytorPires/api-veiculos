import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IVehicle } from '../domain/models/IVehicles';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IShowVehicles } from '../domain/models/IShowVehicles';

@injectable()
class ShowVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehicleRepository: IVehicleRepository
  ) {}
  public async execute({ id }: IShowVehicles): Promise<IVehicle> {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new AppError('User not found.');
    }

    return vehicle;
  }
}

export default ShowVehicleService;
