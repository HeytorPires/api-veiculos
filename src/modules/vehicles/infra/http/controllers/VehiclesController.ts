import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateVehicleService from '@modules/vehicles/services/CreateVehicleService';
import ListVehicleService from '@modules/vehicles/services/ListVehiclesService';
import ShowVehicleService from '@modules/vehicles/services/ShowVehicleService';
import UpdateVehicleService from '@modules/vehicles/services/UpdateVehicleService';
import DeleteVehicleService from '@modules/vehicles/services/DeleteVehicleService';

export default class VehicleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = container.resolve(ListVehicleService);
    const customers = await listCustomers.execute();

    return response.status(200).json(customers);
  }

  public async show(request: Request, response: Response) {
    const id = Number(request.params.id);

    const showVehicleService = container.resolve(ShowVehicleService);

    const Customer = await showVehicleService.execute({ id });

    response.status(200).json(Customer);
    return;
  }

  public async create(request: Request, response: Response) {
    const {
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
    } = request.body;

    const createVehicle = container.resolve(CreateVehicleService);

    const Vehicle = await createVehicle.execute({
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

    response.status(201).json(Vehicle);
    return;
  }

  public async update(request: Request, response: Response) {
    const {
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
    } = request.body;

    const id = Number(request.params.id);

    const updateVehicle = container.resolve(UpdateVehicleService);

    const Customer = await updateVehicle.execute({
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
    });

    response.json(Customer);
    return;
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteVehicle = container.resolve(DeleteVehicleService);
    await deleteVehicle.execute(Number(id));

    response.status(204).send();
    return;
  }
}
