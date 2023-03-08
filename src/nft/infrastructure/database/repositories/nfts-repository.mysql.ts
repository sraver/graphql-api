import { EntityManager, EntityRepository } from 'typeorm';
import { NftEntity } from '../models/nfts.entity';
import { NftRepository } from '../../../domain/nft-repository';
import { Nft } from '../../../domain/nft';

@EntityRepository(NftEntity)
export class NftsRepositoryMysql implements NftRepository {
  constructor(private readonly manager: EntityManager) {}

  fetchAll(): Promise<Nft[]> {
    return this.manager.find(NftEntity).then((rows) => {
      return rows.map((row) => {
        const nft = new Nft();

        nft.id = row.id;
        nft.name = row.name;
        nft.blockchainLink = row.blockchainLink;
        nft.description = row.description;
        nft.imageUrl = row.imageUrl;
        nft.owner = row.owner;
        nft.mintDate = row.mintDate;

        return nft;
      });
    });
  }
}
