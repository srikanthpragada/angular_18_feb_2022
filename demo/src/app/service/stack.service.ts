import { Injectable } from '@angular/core';

@Injectable()
export class StackService {
    data : number[] = []

    push(value : number) {
        this.data.push(value)
    }
 
    pop() : number | undefined {
       return this.data.pop() 
    }

    length() {
        return this.data.length
    }
}