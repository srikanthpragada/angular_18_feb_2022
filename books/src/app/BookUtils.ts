import { Book } from './Book';

export class BookUtils {
    static URL: string = "http://localhost:3000/books"

    // Returns true on success and false on failure 
    static deleteBook(books: Book[], id: string | undefined) : boolean  {
        // find out book in the array and delete
        for (var i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
                return true;
            }
        }
        return false;
    } // deleteBook 
}