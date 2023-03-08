import { Resolver, Query } from '@nestjs/graphql';
import { FetchAll } from '../application/query/fetch-all';
import { Nft } from '../../graphql';

@Resolver('Nft')
export class NftResolver {
  constructor(private readonly nftFetcher: FetchAll) {}

  @Query('nfts')
  getNfts(): Promise<Nft[]> {
    return this.nftFetcher.execute().then((items) => {
      return items.map((nft) => {
        return {
          name: nft.name,
          blockchainLink: nft.blockchainLink,
          description: nft.description,
          imageUrl: nft.imageUrl,
          mintDate: nft.mintDate.toUTCString(),
        };
      });
    });
  }
}
