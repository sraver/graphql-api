import { Nft } from '../../domain/nft';
import { Inject, Injectable } from '@nestjs/common';
import { Symbols } from '../../../config/symbols';
import { NftRepository } from '../../domain/nft-repository';

@Injectable()
export class FetchAll {
  constructor(
    @Inject(Symbols.NftsRepository) private readonly repository: NftRepository,
  ) {}

  execute(): Promise<Nft[]> {
    return this.repository.fetchAll();
  }
}
