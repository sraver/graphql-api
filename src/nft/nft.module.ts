import { Module } from '@nestjs/common';
import { NftResolver } from './infrastructure/nft.resolver';
import { FetchAll } from './application/query/fetch-all';
import { TransferNft } from './application/mutation/transfer-nft';
import nftsRepositoryProvider from './infrastructure/database/repositories/nfts-repository.provider';

@Module({
  providers: [NftResolver, FetchAll, TransferNft, nftsRepositoryProvider()],
})
export class NftModule {}
