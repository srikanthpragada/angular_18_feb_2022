import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent  {
    message : string =  "Bindings Demo"
    title : string = "Click here to get details!"
    pointerPosition : string = ""
    target = "http://google.com"
    constructor() { }

    showPointer(info : any) {
        console.log(info)  // MouseEvent
        this.pointerPosition = `X = ${info.x}, Y = ${info.y}`
    }
}
