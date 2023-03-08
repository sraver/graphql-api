import { Module } from '@nestjs/common';
import { NftResolver } from './infrastructure/nft.resolver';
import { FetchAll } from './application/query/fetch-all';
import nftsRepositoryProvider from './infrastructure/database/repositories/nfts-repository.provider';

@Module({
  providers: [NftResolver, FetchAll, nftsRepositoryProvider()],
})
export class NftModule {}
