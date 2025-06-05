import { inject, injectable } from 'tsyringe';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IPaginateVehicles } from '../domain/models/IPaginateVehicles';

@injectable()
class ListVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehicleRepository
  ) {}

  public async execute(): Promise<IPaginateVehicles> {
    const customers = await this.vehiclesRepository.findAll();

    return customers;
  }
}

export default ListVehicleService;
