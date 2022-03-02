import { Component, OnInit } from '@angular/core';

class Passenger {
  name?: string;
  age?: number;
  gender?: string;
}

@Component({
  selector: 'st-passengers',
  templateUrl: './passengers.component.html'
 
})
export class PassengersComponent implements OnInit {
  passengers: Passenger[] = [ {name:'Steve', age : 40, gender: 'm'}]
  passenger: Passenger = { name: "", age: 0, gender: 'm' }
  
  constructor() { }

  ngOnInit(): void {
  }

  addPassenger() {
    //console.log(this.passenger)
    this.passengers.push({...this.passenger}) // spread operator
  }

  deletePassenger(index: number) {
     this.passengers.splice(index, 1)
  }

}
