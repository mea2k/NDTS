/** КЛАСС - КОНТЕЙНЕР КНИГ
 * сохраняет всю информацию о книгах
 * МЕТОДЫ КЛАССА:
 *   getBooks()  - возвращает все содержимое контейнера
 *   getBook(id)   - возвращает один объект (книгу) по идентификатору ID 
 *               или null, если не найден 
 *   createBook(item: Book) - добавление объекта(книги) в хранилище
 *               возвращает добавленный объект или null. ID объекта формируется автоматически
 *   updateBook(id, item: Book) - изменение содержимого полей объекта(книги) с идентификатором ID.
 *                      Возвращает измененный объект или null, если объекта с ID нет
 *   deleteBook(id) - удаление объекта(книгу) с идентификатором ID.
 *                Возвращает TRUE в случае успеха или FALSE, если объект не найден.
 * 
*/
abstract class BookStorage {
    // createBook(item: Book) - добавление объекта(книги) в хранилище
    //                          возвращает добавленный объект или null. ID объекта формируется автоматически
    abstract createBook(book: Book): Book | null;

    // getBook(id) - возвращает один объект (книгу) по идентификатору ID 
    //               или null, если не найден 
    abstract getBook(id: number): Book | null;

    // getBooks()  - возвращает все содержимое контейнера
    abstract getBooks(): Book[];

    // updateBook(id, item: Book) - изменение содержимого полей объекта(книги) с идентификатором ID.
    //                              Возвращает измененный объект или null, если объекта с ID нет
    abstract updateBook(id: number, item: Book): Book;

    // deleteBook(id) - удаление объекта(книгу) с идентификатором ID.
    //                  Возвращает TRUE в случае успеха или FALSE, если объект не найден.
    abstract deleteBook(id: number): boolean
}

