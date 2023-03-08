import { Nft } from './nft';

export interface NftRepository {
  fetchAll(): Promise<Nft[]>;
}
