import { EntityManager, EntityRepository } from 'typeorm';
import { NftEntity } from '../models/nfts.entity';
import { NftRepository } from '../../../domain/nft-repository';
import { Nft, NftId, UserId } from '../../../domain/nft';

@EntityRepository(NftEntity)
export class NftsRepositoryMysql implements NftRepository {
  constructor(private readonly manager: EntityManager) {}

  fetch(user: UserId, page: number, count: number): Promise<Nft[]> {
    return this.manager
      .find(NftEntity, {
        where: {
          owner: user,
        },
        skip: (page - 1) * count,
        take: count,
      })
      .then((rows) => {
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

  transfer(user: UserId, id: NftId, to: UserId): Promise<boolean> {
    return this.manager
      .update(
        NftEntity,
        {
          id: id,
          owner: user,
        },
        {
          owner: to,
        },
      )
      .then((result) => {
        return result.affected > 0;
      });
  }
}
