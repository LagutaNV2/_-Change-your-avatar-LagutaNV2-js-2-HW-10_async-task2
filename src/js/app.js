// TODO: write your code here
import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load(); // Ожидаем загрузки данных
    console.log('Game saving loaded:', saving); // Успешный результат
  } catch (error) {
    console.error('Error loading game saving:', error); // Обработка ошибок
  }
})();
