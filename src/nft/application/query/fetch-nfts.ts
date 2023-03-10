import { Nft, UserId } from '../../domain/nft';
import { Inject, Injectable } from '@nestjs/common';
import { Symbols } from '../../../config/symbols';
import { NftRepository } from '../../domain/nft-repository';

@Injectable()
export class FetchNfts {
  constructor(
    @Inject(Symbols.NftsRepository) private readonly repository: NftRepository,
  ) {}

  execute(user: UserId, page: number, count: number): Promise<Nft[]> {
    return this.repository.fetch(user, page, count);
  }
}
