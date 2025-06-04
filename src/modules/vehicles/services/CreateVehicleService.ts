import AppError from '@shared/errors/AppError';
import { IVehicleCreate } from '../domain/models/IVehicleCreate';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IVehicle } from '@modules/vehicles/domain/models/IVehicles';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehicleRepository: IVehicleRepository
  ) {
    this.vehicleRepository;
  }
  public async execute({
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
  }: IVehicleCreate): Promise<IVehicle> {
    // const emailExists = await this.customersRepository.findByEmail(email);

    // if (emailExists) {
    //   throw new AppError('Email address alredy used.');
    // }

    const customer = await this.vehicleRepository.create({
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

    return customer;
  }
}

export default CreateVehicleService;
