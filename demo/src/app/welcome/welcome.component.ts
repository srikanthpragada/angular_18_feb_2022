
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-welcome',
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent  {
    message : string = ""
    constructor() { }

    showMessage(name : string) {
        if(name == "")
           name = "Guest";
           
        this.message = `${name},  Welcome to Angular!!!`

    }
 
}