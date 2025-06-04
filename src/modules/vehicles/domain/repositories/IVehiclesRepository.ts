import { IPaginateVehicles } from '@modules/vehicles/domain/models/IPaginateVehicles';
import { IVehicle } from '@modules/vehicles/domain/models/IVehicles';
import { IVehicleCreate } from '@modules/vehicles/domain/models/IVehicleCreate';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IVehicleRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateVehicles>;
  findById(id: number): Promise<IVehicle | undefined>;
  create(data: IVehicleCreate): Promise<IVehicle>;
  save(customer: IVehicle): Promise<IVehicle>;
  remove(customer: IVehicle): Promise<void>;
}
