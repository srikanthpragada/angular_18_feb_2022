
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Book {
     title : string;
     author: string;
     price : number;
}

@Component({
    selector: 'st-books',
    templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit {
    books : Book[] = [];
    constructor(private http : HttpClient) { 

    }

    ngOnInit() { 
         this.http.get<Book[]>("assets/books.json")
                  .subscribe( data => this.books = data);

    }
}