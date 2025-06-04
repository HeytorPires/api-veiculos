import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';

@injectable()
class DeleteVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehicleRepository: IVehicleRepository
  ) {
    this.vehicleRepository;
  }
  public async execute(id: string): Promise<void> {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new AppError('User not found.');
    }
    await this.vehicleRepository.remove(vehicle);
  }
}

export default DeleteVehicleService;
