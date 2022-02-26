import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-parent',
    template: 
    `<h1>Parent Component </h1>
     <st-child [message]="today" (process)="doAnotherProcess($event)"></st-child>
     <hr/>
     <st-child [message]="'Another Message'" (process)="doProcess($event)"></st-child>
     <hr />
     <st-child></st-child>
    `
})
export class ParentComponent  {
    today : string = new Date().toString()

    // Event Handler for process event 
    doProcess(msg : String) {
        alert("Event occurred with " + msg)
    }
    doAnotherProcess(msg : String) {
        console.log(msg)
    }
}
