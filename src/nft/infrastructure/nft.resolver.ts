import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { FetchNfts } from '../application/query/fetch-nfts';
import { TransferNft } from '../application/mutation/transfer-nft';
import { Nft } from '../../graphql';
import { JwtAuthGuard } from '../../auth/domain/jwt-auth-guard';
import { AuthenticatedUser } from '../../auth/domain/authenticated-user';

@Resolver('Nft')
export class NftResolver {
  constructor(
    private readonly nftFetcher: FetchNfts,
    private readonly transferNft: TransferNft,
  ) {}

  @Query('nfts')
  @UseGuards(JwtAuthGuard)
  getNfts(
    @Args('page') page: number,
    @Args('count') count: number,
    @AuthenticatedUser() user,
  ): Promise<Nft[]> {
    return this.nftFetcher.execute(user.id, page, count).then((items) => {
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
  @UseGuards(JwtAuthGuard)
  transfer(
    @Args('nft') nft: string,
    @Args('toUser') toUser: string,
  ): Promise<boolean> {
    return this.transferNft.execute(nft, toUser);
  }
}
