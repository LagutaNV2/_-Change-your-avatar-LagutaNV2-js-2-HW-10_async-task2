import GameSavingLoader from '../GameSavingLoader.js';

test('GameSavingLoader.load should resolve without errors', async () => {
  await expect(GameSavingLoader.load()).resolves.toBeDefined();
});
