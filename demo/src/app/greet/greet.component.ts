import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent {
  message: string = "";
  
  constructor() {
    var cd = new Date()
    var hours = cd.getHours()

    if (hours < 12)
      this.message = "Good Morning!"
    else
      if (hours < 17)
        this.message = "Good Afternoon!"
      else
        this.message = "Good Evening!"
  }



}
