import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DiscountComponent } from './discount/discount.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BindingsComponent]
})
export class AppModule { }
