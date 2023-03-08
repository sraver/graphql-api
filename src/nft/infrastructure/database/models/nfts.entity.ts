import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'nfts' })
export class NftEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  blockchainLink: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  owner: string;

  @Column({ type: 'timestamp', nullable: true })
  mintDate: Date;
}
