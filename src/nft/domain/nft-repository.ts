import { Nft, NftId, UserId } from './nft';

export interface NftRepository {
  fetchAll(): Promise<Nft[]>;

  transfer(id: NftId, to: UserId): Promise<boolean>;
}
