import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../infra/typeorm/repositories/VehiclesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IVehicleRepository } from '../domain/repositories/IVehiclesRepository';
import { IVehicleUpdate } from '../domain/models/IVehicleUpdate';
import { IVehicle } from '../domain/models/IVehicles';
import { cnpj, cpf } from 'cpf-cnpj-validator';
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
