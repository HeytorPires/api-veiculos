import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableVehicle1749168722052 implements MigrationInterface {
    name = 'alterTableVehicle1749168722052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "UQ_00f176cfec58c116bac5a4a27ed"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "UQ_00f176cfec58c116bac5a4a27ed" UNIQUE ("placa")`);
    }

}
