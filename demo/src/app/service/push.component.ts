import { Component, OnInit } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-push',
    templateUrl: './push.component.html',
    // providers : [StackService]
})
export class PushComponent   {
  
    constructor(private stack : StackService) 
    { }

    pushValue(value : string) {
       this.stack.push(parseInt(value))
    }

    length() : number {
        return this.stack.length();
    }

}

