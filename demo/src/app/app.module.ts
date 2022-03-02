import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RegisterComponent } from './forms/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RLoginComponent } from './forms/rlogin.component';
// import { PassengersComponent } from './passengers/passengers.component';

 
@NgModule({
  declarations: [
     RLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
