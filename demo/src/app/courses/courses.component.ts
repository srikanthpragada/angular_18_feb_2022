import { Component, OnInit } from '@angular/core';

class Course {
    name : string;
    count : number;

    constructor(name : string, count : number) {
      this.name  = name;
      this.count = count;
    }
}

@Component({
  selector: 'st-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  courses : Course[] = [ new Course("Python",10), new Course("Angular",20)];

  constructor() { }

  addCourse(name : string, count : string) {
      this.courses.push( new Course(name, parseInt(count)))
  }

  deleteCourse(idx : number) {
     this.courses.splice(idx,1)  // delete element at idx index 
  }
 

}
