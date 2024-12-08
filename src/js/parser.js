// Имитация преобразования ArrayBuffer в JSON-строку

export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    // Метод apply используется для вызова функции с указанным контекстом (this) и массивом аргументов.
    // В данном случае: null — контекст не используется

    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
