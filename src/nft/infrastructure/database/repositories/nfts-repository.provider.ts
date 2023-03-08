import { NftsRepositoryMysql } from './nfts-repository.mysql';
import { Symbols } from '../../../../config/symbols';

export default () => {
  return {
    provide: Symbols.NftsRepository,
    useClass: NftsRepositoryMysql,
  };
};
