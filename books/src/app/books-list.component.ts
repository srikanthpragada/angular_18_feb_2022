import { Component } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent {
    books: Book[] = [];
    done: boolean = false;
    constructor(private http: HttpClient, private router: Router) {
    }

    getBooks() {
        this.done = false;
        this.http.get<Book[]>(BookUtils.URL)
            .pipe(
                finalize(() => this.done = true) 
            )
            .subscribe(
                 {
                     next: response => this.books = response   // next 
                 }
            );
    }
    ngOnInit() {
        this.getBooks();
    }

    deleteBook(id: string | undefined) {
        var resp = confirm("Do you want to delete book with id [" + id + "] ?");
        if (resp) {
            this.http.delete(BookUtils.URL + "/" + id)
                .subscribe(
                    { next : () => 
                        {
                            this.getBooks();
                        },
                     error : () => alert("Sorry! Could not delete book!")
                    }
                )
        }
    }

    updateBook(id: string | undefined) {
        this.router.navigate(["update", id]);
    }

}