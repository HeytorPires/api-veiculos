import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateVehicleTable1749163726070 implements MigrationInterface {
    name = 'CreateVehicleTable1749163726070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_Tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_69feeb64afb7ada417c564dcd66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" SERIAL NOT NULL, "vin" character varying NOT NULL, "placa" character varying NOT NULL, "modelo" character varying NOT NULL, "data_entrega" date, "data_fabricacao" date, "data_venda" date, "pais_operacao" character varying NOT NULL, "concessionaria_venda" character varying, "data_ultimo_reparo" date, "documento_proprietario" character varying NOT NULL, "data_criacao" TIMESTAMP NOT NULL DEFAULT now(), "ultima_atualizacao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8288ce015b69c5856cf54e07a67" UNIQUE ("vin"), CONSTRAINT "UQ_00f176cfec58c116bac5a4a27ed" UNIQUE ("placa"), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_Tokens"`);
    }

}
