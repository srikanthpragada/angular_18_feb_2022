import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DiscountComponent } from './discount/discount.component';
import { BindingsComponent } from './bindings/bindings.component';
// import { DirectivesComponent } from './directivesdemo/directives.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
     CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CoursesComponent]
})
export class AppModule { }
