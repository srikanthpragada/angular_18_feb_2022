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
  message : string = "";

  constructor() { }

  addCourse(name : string, count : string) {
      this.message = "";
      // Look for a course with the given in the array 
      let course = this.courses.find( c => c.name == name)
      if(course) // found
          this.message = "Course already exists!"
      else
          this.courses.push( new Course(name, parseInt(count)))
  }

  deleteCourse(idx : number) {
     if (confirm('Do you want to delete?'))
         this.courses.splice(idx,1)  // delete element at idx index 
  }

  getTotal(): number {
    let total = 0;
    for (let c of this.courses) {
        total += c.count;
    }

    return total;
  }
 

}
