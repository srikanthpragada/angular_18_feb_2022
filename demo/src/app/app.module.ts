import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DiscountComponent } from './discount/discount.component';
import { BindingsComponent } from './bindings/bindings.component';
// import { DirectivesComponent } from './directivesdemo/directives.component';
import { CoursesComponent } from './courses/courses.component';
// import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';

@NgModule({
  declarations: [
        ProductsListComponent, ProductDetailsComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ ProductsListComponent ]
})
export class AppModule { }
