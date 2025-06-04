import { Repository, getRepository } from 'typeorm';
import Vehicles from '../entities/Vehicles';
import { IVehicleCreate } from '@modules/vehicles/domain/models/IVehicleCreate';
import { IPaginateVehicles } from '@modules/vehicles/domain/models/IPaginateVehicles';
import {
  IVehicleRepository,
  SearchParams,
} from '@modules/vehicles/domain/repositories/IVehiclesRepository';

class VehicleRepository implements IVehicleRepository {
  private ormRepository: Repository<Vehicles>;
  constructor() {
    this.ormRepository = getRepository(Vehicles);
  }

  public async create({
    vin,
    placa,
    modelo,
    data_entrega,
    data_fabricacao,
    data_venda,
    pais_operacao,
    concessionaria_venda,
    data_ultimo_reparo,
    documento_proprietario,
  }: IVehicleCreate): Promise<Vehicles> {
    const customer = this.ormRepository.create({
      vin,
      placa,
      modelo,
      data_entrega,
      data_fabricacao,
      data_venda,
      pais_operacao,
      concessionaria_venda,
      data_ultimo_reparo,
      documento_proprietario,
    });

    await this.ormRepository.save(customer);

    return customer;
  }

  public async save(customer: Vehicles): Promise<Vehicles> {
    await this.ormRepository.save(customer);

    return customer;
  }
  public async remove(customer: Vehicles): Promise<void> {
    await this.ormRepository.remove(customer);
  }
  public async findById(id: number): Promise<Vehicles | undefined> {
    const customer = await this.ormRepository.findOne({ where: { id } });
    return customer;
  }
  public async findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<IPaginateVehicles> {
    const [customers, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const lastPage = Math.ceil(count / take);

    return {
      from: skip + 1,
      to: skip + customers.length,
      per_page: take,
      total: count,
      current_page: page,
      prev_page: page > 1 ? page - 1 : null,
      next_page: page < lastPage ? page + 1 : null,
      data: customers,
    };
  }
}

export default VehicleRepository;
