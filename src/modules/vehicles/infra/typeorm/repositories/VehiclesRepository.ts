import { Repository, getRepository } from 'typeorm';
import Vehicles from '../entities/Vehicles';
import { IVehicleCreate } from '@modules/vehicles/domain/models/IVehicleCreate';
import { IPaginateVehicles } from '@modules/vehicles/domain/models/IPaginateVehicles';
import { IVehicleRepository } from '@modules/vehicles/domain/repositories/IVehiclesRepository';

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
  public async findByVin(vin: string): Promise<Vehicles | undefined> {
    const customer = await this.ormRepository.findOne({ where: { vin } });
    return customer;
  }
  public async findAll(): Promise<IPaginateVehicles> {
    const [customers] = await this.ormRepository
      .createQueryBuilder()
      .getManyAndCount();

    return {
      data: customers,
    };
  }
}

export default VehicleRepository;
