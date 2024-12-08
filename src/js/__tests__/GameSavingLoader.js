import GameSavingLoader from '../GameSavingLoader.js';
import read from '../reader.js';
import json from '../parser.js';

// Мокаем зависимости
jest.mock('../reader.js');
jest.mock('../parser.js');

afterEach(() => {
  jest.clearAllMocks();
});

test('GameSavingLoader.load korrect', async () => {

  // метод библиотеки Jest, используется для настройки поведения замоканной функции (mock function),
  // чтобы та возвращала успешно выполненный Promise с указанным значением.
  json.mockResolvedValue(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  );

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('GameSavingLoader.load: read fails', async () => {
  // метод библиотеки Jest, используется для настройки поведения замоканной функции (mock function),
  // чтобы та возвращала отклонённый Promise с заданным значением.
  read.mockRejectedValue(new Error('Failed to read'));

  await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving: Failed to read');
});

test('GameSavingLoader.load : read korrect, parsing fails', async () => {
  read.mockResolvedValue(new Uint16Array().buffer); // возвращает пустой ArrayBuffer
  json.mockRejectedValue(new Error('Failed to parse'));

  // .rejects — указывает, что тестируемая функция возвращает отклонённый Promise.
  // .toThrow — проверяет, что отклонение произошло с объектом ошибки, сообщение или тип которой соответствует указанным критериям.
  await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving: Failed to parse');
});
