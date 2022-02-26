import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-child',
    template: `
    <h3>{{message}}</h3>
    <button (click)="raiseEvent()">Click Here</button>
    `
})
export class ChildComponent {
    @Input() message: string = "No Message!!!";  // Input Property

    // Declare event that sends a string to even handler 
    @Output() process = new EventEmitter<string>()

    raiseEvent() {
        // raise event and send data to event handler 
        this.process.emit(this.message)
    }
}
