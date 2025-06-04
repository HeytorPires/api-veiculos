import { inject, injectable } from 'tsyringe';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IPaginateVehicles } from '../domain/models/IPaginateVehicles';

interface SearchParams {
  page: number;
  limit: number;
}

@injectable()
class ListVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehicleRepository
  ) {}

  public async execute({
    page,
    limit,
  }: SearchParams): Promise<IPaginateVehicles> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const customers = await this.vehiclesRepository.findAll({
      page,
      skip,
      take,
    });

    return customers;
  }
}

export default ListVehicleService;
