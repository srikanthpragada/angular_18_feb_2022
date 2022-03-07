import { Component, ViewChild } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { HttpClient } from "@angular/common/http"
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators'

@Component({
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book: Book;
    done: boolean = false;
    added: boolean = false;
    // Get access to form to access properties of the form 
    @ViewChild('bookForm') bookForm?: FormGroup; 

    constructor(private http: HttpClient) { 
        this.book = { title: "", price: 0 }
    }

    ngOnInit() {
    }

    isDirty() {
        return this.bookForm?.dirty && !this.done;
    }

    addBook() {
        // call rest api
        this.done = false;
        this.added = false;
        // Make POST request to API
        this.http.post(BookUtils.URL, this.book)
            .pipe(
                finalize(() => this.done = true)
            )
            .subscribe(
                {
                    next: () => {
                        this.added = true
                        this.book = { title: "", price: 0 }
                    }
                }
            );
    }

}