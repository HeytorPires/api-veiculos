export interface IVehicleUpdate {
  id: number;
  vin: string;
  placa: string;
  modelo: string;
  data_entrega: Date | null;
  data_fabricacao: Date | null;
  data_venda: Date | null;
  pais_operacao: string;
  concessionaria_venda: string | null;
  data_ultimo_reparo: Date | null;
  documento_proprietario: string;
}
