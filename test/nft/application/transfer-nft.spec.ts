import { TransferNft } from '../../../src/nft/application/mutation/transfer-nft';
import { createMock } from 'ts-auto-mock';
import { NftRepository } from '../../../src/nft/domain/nft-repository';

describe('Transfer Nft', () => {
  it('Should return true when transfer occurred', async () => {
    // Arrange
    const repository = createMock<NftRepository>({
      transfer: (): Promise<boolean> => Promise.resolve(true),
    });
    const transferNft = new TransferNft(repository);

    // Act
    const result = await transferNft.execute('1', '1', '2');

    // Assert
    expect(result).toBeTruthy();
  });

  it('Should return false when transfer did not occur', async () => {
    // Arrange
    const repository = createMock<NftRepository>({
      transfer: (): Promise<boolean> => Promise.resolve(false),
    });
    const transferNft = new TransferNft(repository);

    // Act
    const result = await transferNft.execute('1', '1', '2');

    // Assert
    expect(result).toBeFalsy();
  });
});
