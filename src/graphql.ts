
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface TransferNftInput {
    nft?: Nullable<string>;
    toUser?: Nullable<string>;
}

export interface IQuery {
    nfts(): Nullable<Nullable<Nft>[]> | Promise<Nullable<Nullable<Nft>[]>>;
}

export interface IMutation {
    transferNft(transferNftInput?: Nullable<TransferNftInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface Nft {
    name?: Nullable<string>;
    blockchainLink?: Nullable<string>;
    description?: Nullable<string>;
    imageUrl?: Nullable<string>;
    mintDate?: Nullable<string>;
}

type Nullable<T> = T | null;
