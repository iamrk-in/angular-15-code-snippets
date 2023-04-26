// functions

function myFunc() {
    console.log(`myFunc`)
}

myFunc();

var num1 = 5;
var num2 = 9;

function doAction(n1: number = 9, n2: number = 5) {
    let res = (n1 * n2);
    console.log(`the res: ${res}`)
}

doAction()

function userData1(uId: number, uName: string) {
    let userRes = `userId: ${uId}, userName: ${uName}`
    console.log(userRes)
}

let userId: number | string = 537
let userName: string = "john"

userData1(userId, userName)

function doSum(n1: number, n2: number) {
    return (n1 + n2)
}

let r1 = doSum(num1, num2)
console.log(`r1: ${r1}`)

function getTime() {
    return new Date().getDate() + 12
}


let dt = new Date()
console.log(dt)

dt.setDate(dt.getDate() + 12)
console.log(dt)


function doSub(n1: number, n2: number): number {
    return (n1 - n2)
}

doSub(num1, num2)

// optional parameters
function doMul(a: number, b: number, c?: number): number {
    return (a * b)
}

doMul(num1, num2)


// named parameters
function doDiv({dividend, divisor}: {dividend: number, divisor: number}): number {
    return dividend / divisor
}

console.log(doDiv({dividend: 5, divisor: 9}))

// rest parameters
function add(a: number, b: number, ...rest: any[]): number {
    return a + b + rest.reduce((c, d) => c + d)
}

console.log(add(3, 9, "j", 7))

// type alias
// function types can be specified separetly from functions with type aliases
// these types are written similarly to arrow functions

// type Negate = {value: number} => number
const checkValue = (n1: number) => {
    return (n1 + n1)
} 

console.log(checkValue(5))