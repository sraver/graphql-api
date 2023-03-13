import { FetchNfts } from '../../../src/nft/application/query/fetch-nfts';
import { createMock } from 'ts-auto-mock';
import { NftRepository } from '../../../src/nft/domain/nft-repository';
import { Nft } from '../../../src/nft/domain/nft';

describe('Fetch all', () => {
  it('Should return no Nfts when repository empty', async () => {
    // Arrange
    const repository = createMock<NftRepository>({
      fetch: (): Promise<Nft[]> => Promise.resolve([]),
    });
    const fetchAll = new FetchNfts(repository);

    // Act
    const nfts = await fetchAll.execute('', 1, 1);

    // Assert
    expect(nfts).toHaveLength(0);
  });

  it('Should return Nft array when repository returns data', async () => {
    // Arrange
    const repository = createMock<NftRepository>({
      fetch: (): Promise<Nft[]> => {
        const nft = new Nft();
        nft.id = '1';
        nft.name = 'name';
        nft.blockchainLink = 'link';
        nft.description = 'description';
        nft.imageUrl = 'image';
        nft.owner = 'owner';
        nft.mintDate = new Date();
        return Promise.resolve([nft]);
      },
    });
    const fetchAll = new FetchNfts(repository);

    // Act
    const nfts = await fetchAll.execute('', 1, 1);

    // Assert
    expect(nfts).toHaveLength(1);
  });
});
