export interface IVehicleUpdate {
  id: number;
  vin: string;
  placa: string;
  modelo: string;
  data_entrega: Date;
  data_fabricacao: Date;
  data_venda: Date;
  pais_operacao: string;
  concessionaria_venda: string;
  data_ultimo_reparo: Date;
  documento_proprietario: string;
}
