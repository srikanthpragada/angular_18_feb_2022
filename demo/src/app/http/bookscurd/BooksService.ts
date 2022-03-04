import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from "./book";

@Injectable()
export class BooksService {
    URL: string = "http://localhost:3000/books";
    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.URL);
    }

    addBook(book: Book): Observable<any> {
        return this.http.post(this.URL, book)
    }


}