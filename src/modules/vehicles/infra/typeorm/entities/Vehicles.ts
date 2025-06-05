import { IVehicle } from '@modules/vehicles/domain/models/IVehicles';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles')
class Vehicle implements IVehicle {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  vin: string;

  @Column({ unique: true })
  placa: string;

  @Column()
  modelo: string;

  @Column({ type: 'date', nullable: true }) //
  data_entrega: Date | null;

  @Column({ type: 'date', nullable: true })
  data_fabricacao: Date | null;

  @Column({ type: 'date', nullable: true })
  data_venda: Date | null;

  @Column()
  pais_operacao: string;

  @Column({ nullable: true })
  concessionaria_venda: string;

  @Column({ type: 'date', nullable: true })
  data_ultimo_reparo: Date | null;

  @Column()
  documento_proprietario: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}

export default Vehicle;
