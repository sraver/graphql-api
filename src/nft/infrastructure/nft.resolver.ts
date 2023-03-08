import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FetchAll } from '../application/query/fetch-all';
import { TransferNft } from '../application/mutation/transfer-nft';
import { Nft } from '../../graphql';

@Resolver('Nft')
export class NftResolver {
  constructor(
    private readonly nftFetcher: FetchAll,
    private readonly transferNft: TransferNft,
  ) {}

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

  @Mutation('transferNft')
  transfer(
    @Args('transferNftInput') input: { nft: string; toUser: string },
  ): Promise<boolean> {
    return this.transferNft.execute(input.nft, input.toUser);
  }
}
