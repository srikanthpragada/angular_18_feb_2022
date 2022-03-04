
import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './BooksService';

@Component({
    selector: 'st-books',
    templateUrl: 'books.component.html',
    providers : [BooksService]
})

export class BooksComponent implements OnInit {
    books : Book[] = [];
    constructor(private booksService: BooksService) { 
    }

    ngOnInit() { 
         this.booksService.getBooks()
                  .subscribe( data => this.books = data);

    }

    addBook(title : string, price : string) {
        var book = {title : title, price : parseInt(price)}
        this.booksService.addBook(book)
            .subscribe( 
             {   
                next : () => alert("Added Successfully!"),
                error : () => alert("Sorry! Could not add book")
             } )
    }
}