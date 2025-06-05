import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../infra/typeorm/repositories/VehiclesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IVehicleUpdate } from '../domain/models/IVehicleUpdate';
import { IVehicle } from '../domain/models/IVehicles';
@injectable()
class UpdateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehicleRepository
  ) {
    this.vehiclesRepository;
  }
  public async execute({
    id,
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
  }: IVehicleUpdate): Promise<IVehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new AppError('User not found.');
    }

    vehicle.vin = vin;
    vehicle.placa = placa;
    vehicle.modelo = modelo;
    vehicle.data_entrega = data_entrega;
    vehicle.data_fabricacao = data_fabricacao;
    vehicle.data_venda = data_venda;
    vehicle.pais_operacao = pais_operacao;
    vehicle.concessionaria_venda = concessionaria_venda;
    vehicle.data_ultimo_reparo = data_ultimo_reparo;
    vehicle.documento_proprietario = documento_proprietario;

    await this.vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVehicleService;
