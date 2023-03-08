import { Inject, Injectable } from '@nestjs/common';
import { Symbols } from '../../../config/symbols';
import { NftRepository } from '../../domain/nft-repository';
import { NftId, UserId } from '../../domain/nft';

@Injectable()
export class TransferNft {
  constructor(
    @Inject(Symbols.NftsRepository) private readonly repository: NftRepository,
  ) {}

  execute(user: UserId, id: NftId, to: UserId): Promise<boolean> {
    return this.repository.transfer(user, id, to);
  }
}
