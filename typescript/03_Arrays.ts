const names: string[] = ["qw", "nm", "oi", "y"];
console.log(`names: ${names}`);

const users: string[] = [];
users[0] = "fg";
users[1] = "jk";

console.log(`users: ${users}`);

users.push("fwgw");
console.log(`users: ${users}`);

// readonly
const userData: string[] = ["john", "paul"];
console.log(`user firstName: ${userData[0]}, and lastName: ${userData[1]}`);

// inference - type of an array if it has values
const numbers = [];
numbers.push(4);

console.log(numbers);

numbers.push("2");

let matrix: [string, number][] = [
  ["k", 7],
  ["4", 9],
  ["8", 2],
];

console.log(matrix);

matrix = [
  ["o", 7],
  ["1", 9],
  ["h", 2],
];

matrix.push(["436", 75]);

console.log(matrix);

// typed arrays - a tuple is a type array with pre - defined length and types for each index
let ourTuple: readonly [any, string, number];

ourTuple = [47, "angular", 8];
console.log(`ourTuple: ${ourTuple[0]}`);

// readonly tuple
// ourTuple = [6, true, "mkoo"];
// console.log(`ourTuple: ${ourTuple}`);

// ourTuple.push("adding new item");
// console.log(`ourTuple: ${ourTuple}`);

// ourTuple.push(7);
// console.log(`ourTuple: ${ourTuple}`);

// ourTuple = [15, true, "angular"];
// console.log(`ourTuple: ${ourTuple}`);

const ourReadOnlyTuple: readonly [number, boolean, string] = [
  4,
  true,
  "readonly",
];

console.log(`ourReadOnlyTuple: ${ourReadOnlyTuple}`);

// ourReadOnlyTuple = [63, false, "check"];
// console.log(`ourReadOnlyTuple: ${ourReadOnlyTuple}`);

// ourReadOnlyTuple.pop();
// console.log(`ourReadOnlyTuple: ${ourReadOnlyTuple}`);

// named tuples
let graph: [x: number, y: string] = [6, "asf"];

//  destructered tuples
const graph1: [number, number] = [64, 3];
const [x, a] = graph1;
console.log(x);
