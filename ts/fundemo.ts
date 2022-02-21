
function mul(n1: number, n2: number = 10): number {
    return n1 * n2;
}

function add(n1: number, n2: number): number {
    return n1 + n2;
}


// declare functions to be overloaded
function getTitles(author: string): void
function getTitles(status: Boolean): void

// function definition
function getTitles(value: any) {
    if (typeof (value) == 'string')
        console.log("String version")
    else
        console.log("boolean version")
}

getTitles('abc')
getTitles(true)
getTitles(10)

console.log(mul(10, 20))
console.log(mul(10))

// console.log(add(10))

