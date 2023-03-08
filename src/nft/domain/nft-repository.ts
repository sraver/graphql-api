import { Nft, NftId, UserId } from './nft';

export interface NftRepository {
  fetch(user: UserId, page: number, count: number): Promise<Nft[]>;

  transfer(id: NftId, to: UserId): Promise<boolean>;
}
