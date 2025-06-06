import AppError from '@shared/errors/AppError';
import { IVehicleCreate } from '../domain/models/IVehicleCreate';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IVehicle } from '@modules/vehicles/domain/models/IVehicles';
import { inject, injectable } from 'tsyringe';
import { cpf, cnpj } from 'cpf-cnpj-validator';

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
    const VehicleExists = await this.vehicleRepository.findByVin(vin);

    if (VehicleExists) {
      throw new AppError('Vin alredy used.');
    }

    const cpfValid = cpf.isValid(documento_proprietario);
    const cnpjValid = cnpj.isValid(documento_proprietario);

    if (!cpfValid && !cnpjValid) {
      throw new AppError('This document provided is not a valid CPF or CNPJ.');
    }

    if (data_fabricacao > data_entrega || data_fabricacao > data_venda) {
      throw new AppError(
        'manufacturing date cannot be later than delivery date or sale date'
      );
    }

    if (data_ultimo_reparo > data_fabricacao) {
      throw new AppError(
        'The date of last repair cannot be earlier than the date of manufacture.'
      );
    }
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
