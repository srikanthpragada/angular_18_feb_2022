import { Component, OnInit } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-pop',
    templateUrl: './pop.component.html',
    // providers : [StackService]
})
export class PopComponent   {
    value : number | undefined;
    // DI 
    constructor(private stack : StackService) 
    { }

    popValue() {
      if (this.length() == 0)
          return;
           
       this.value = this.stack.pop() 
    }

    length() : number {
        return this.stack.length();
    }
}

