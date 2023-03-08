import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1678269820228 implements MigrationInterface {
  name = 'initial1678269820228';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`nfts\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`blockchainLink\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`imageUrl\` varchar(255) NOT NULL, \`owner\` varchar(255) NOT NULL, \`mintDate\` timestamp NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`nfts\``);
  }
}
