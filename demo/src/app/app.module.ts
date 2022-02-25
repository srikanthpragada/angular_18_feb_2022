import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DiscountComponent } from './discount/discount.component';
import { BindingsComponent } from './bindings/bindings.component';
// import { DirectivesComponent } from './directivesdemo/directives.component';
import { CoursesComponent } from './courses/courses.component';
// import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { OneComponent } from './icc/one.component';
import { TwoComponent } from './icc/two.component';

@NgModule({
  declarations: [
     OneComponent, TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OneComponent, TwoComponent]
})
export class AppModule { }
