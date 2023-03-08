export type NftId = string;
export type UserId = string;

export class Nft {
  id: NftId;
  name: string;
  blockchainLink: string;
  description: string;
  imageUrl: string;
  owner: UserId;
  mintDate: Date;
}
