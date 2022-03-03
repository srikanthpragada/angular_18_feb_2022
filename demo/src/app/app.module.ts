import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RegisterComponent } from './forms/register.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RLoginComponent } from './forms/rlogin.component';
// import { BooksComponent } from './http/books/books.component';
// import { PassengersComponent } from './passengers/passengers.component';
import {HttpClientModule} from '@angular/common/http'
import { GitUserInfoComponent } from './http/git/gituserinfo.component';

 
@NgModule({
  declarations: [
     GitUserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [GitUserInfoComponent]
})
export class AppModule { }
