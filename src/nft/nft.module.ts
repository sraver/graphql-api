import { Module } from '@nestjs/common';
import { NftResolver } from './infrastructure/nft.resolver';
import { FetchNfts } from './application/query/fetch-nfts';
import { TransferNft } from './application/mutation/transfer-nft';
import nftsRepositoryProvider from './infrastructure/database/repositories/nfts-repository.provider';

@Module({
  providers: [NftResolver, FetchNfts, TransferNft, nftsRepositoryProvider()],
})
export class NftModule {}
