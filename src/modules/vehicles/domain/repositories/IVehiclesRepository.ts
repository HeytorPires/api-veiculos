import { IPaginateVehicles } from '@modules/vehicles/domain/models/IPaginateVehicles';
import { IVehicle } from '@modules/vehicles/domain/models/IVehicles';
import { IVehicleCreate } from '@modules/vehicles/domain/models/IVehicleCreate';

export interface IVehicleRepository {
  findAll(): Promise<IPaginateVehicles>;
  findById(id: number): Promise<IVehicle | undefined>;
  findByVin(vin: string): Promise<IVehicle | undefined>;
  create(data: IVehicleCreate): Promise<IVehicle>;
  save(customer: IVehicle): Promise<IVehicle>;
  remove(customer: IVehicle): Promise<void>;
}
