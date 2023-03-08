import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FetchNfts } from '../application/query/fetch-nfts';
import { TransferNft } from '../application/mutation/transfer-nft';
import { Nft } from '../../graphql';

@Resolver('Nft')
export class NftResolver {
  constructor(
    private readonly nftFetcher: FetchNfts,
    private readonly transferNft: TransferNft,
  ) {}

  @Query('nfts')
  getNfts(
    @Args('page') page: number,
    @Args('count') count: number,
  ): Promise<Nft[]> {
    return this.nftFetcher.execute(page, count).then((items) => {
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

  @Mutation('transferNft')
  transfer(
    @Args('nft') nft: string,
    @Args('toUser') toUser: string,
  ): Promise<boolean> {
    return this.transferNft.execute(nft, toUser);
  }
}
