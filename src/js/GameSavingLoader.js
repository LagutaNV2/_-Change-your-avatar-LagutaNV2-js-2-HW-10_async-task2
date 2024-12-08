import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // Ожидаем чтения данных
      const parsedData = await json(data); // Ожидаем парсинга JSON
      const parsedObject = JSON.parse(parsedData); // Конвертируем строку в объект
      return new GameSaving(                         // Возвращаем экземпляр GameSaving
        parsedObject.id,
        parsedObject.created,
        parsedObject.userInfo
      );
    } catch (error) {
      throw new Error(`Failed to load game saving: ${error.message}`); // Пробрасываем ошибку
    }
  }
}
