// Класс GameSaving описывает структуру сохранения игры.
export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id; // ID сохранения "id": <number>
    this.created = created; // Timestamp создания "created": <timestamp>,
    // userInfo - вложенный объект {"id": <number>, "name": <string>, "level": <number>, "points": <number> }
    this.userInfo = userInfo;
  }
}
