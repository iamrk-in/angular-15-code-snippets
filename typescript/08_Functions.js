// functions
function myFunc() {
    console.log("myFunc");
}
myFunc();
var num1 = 5;
var num2 = 9;
function doAction(n1, n2) {
    if (n1 === void 0) { n1 = 9; }
    if (n2 === void 0) { n2 = 5; }
    var res = (n1 * n2);
    console.log("the res: ".concat(res));
}
doAction();
function userData1(uId, uName) {
    var userRes = "userId: ".concat(uId, ", userName: ").concat(uName);
    console.log(userRes);
}
var userId = 537;
var userName = "john";
userData1(userId, userName);
function doSum(n1, n2) {
    return (n1 + n2);
}
var r1 = doSum(num1, num2);
console.log("r1: ".concat(r1));
function getTime() {
    return new Date().getDate() + 12;
}
var dt = new Date();
console.log(dt);
dt.setDate(dt.getDate() + 12);
console.log(dt);
function doSub(n1, n2) {
    return (n1 - n2);
}
doSub(num1, num2);
// optional parameters
function doMul(a, b, c) {
    return (a * b);
}
doMul(num1, num2);
// named parameters
function doDiv(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(doDiv({ dividend: 5, divisor: 9 }));
// rest parameters
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (c, d) { return c + d; });
}
console.log(add(3, 9, "j", 7));
// type alias
// function types can be specified separetly from functions with type aliases
// these types are written similarly to arrow functions
// type Negate = {value: number} => number
var checkValue = function (n1) {
    return (n1 + n1);
};
console.log(checkValue(5));
