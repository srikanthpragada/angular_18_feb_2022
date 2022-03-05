import { Component, Input } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators'

@Component({
  templateUrl: 'book-update.component.html'
})
export class BookUpdateComponent {
  id?: string;
  book?: Book;
  done: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
  }


  ngOnInit(): void {
    // Get id from route parameter 
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    // get book details 
    this.book = undefined;
    this.http.get<Book>(BookUtils.URL + "/" + this.id)
      .pipe(
        finalize(() => this.done = true)
      )
      .subscribe(
        {
          next: book => this.book = book,
          error: message => {
            this.book = undefined;
            console.log(message)
          }
        }
      );
  }

  updateBook() {
    // call service 
    this.http.put(BookUtils.URL + "/" + this.book?.id, this.book)
      .subscribe(
        {
          next: () => alert("Book Updated!"),
          error: errorObj => this.handleError(errorObj)
        }
      );
  }

  handleError(error: any) {
    console.log(error);
    // alert("Sorry! Book could not be updated!");
    // // return Observable.throw(error.statusText);
  }

}   