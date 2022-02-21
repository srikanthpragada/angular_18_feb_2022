
interface Person {
    name: string;
    email: string;
    // age : number;
}

class Programmer implements Person {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}


function printPerson(p: Person) {

}

printPerson({ name: 'Srikanth', email: 'srikanth@gmail.com' }) // Object literal 
printPerson(new Programmer("A", "a@b.com"))   // Object of impl class 

