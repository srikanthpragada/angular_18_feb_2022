import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-discount',
  templateUrl: './discount.component.html'
})
export class DiscountComponent {
  discount : number = 0;

  constructor() { }

  calculate(price : string, disrate : string, round : boolean) {
        console.log(round)
        this.discount = parseFloat(price) * parseFloat(disrate) / 100; 
  }
 

}
