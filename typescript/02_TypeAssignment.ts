/* explicit */
let firstName: string = "ryan";

// implicit
let lastName = "dyan";

// error
let fullName: string = "asfd";
fullName = "46";

let age: number = 66;

console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(age);

// unable to infer
// index.html?id=63&name=john
// {id: 63, name: "john"}

// const json = JSON.parse("id=63&name=john");
// console.log(json);
// console.log(typeof json);

let statu: boolean = true;
console.log(statu);

let name1: any = { name: "jk" };
console.log(name1);

name1 = 63;

let unk: unknown = 1;
console.log(unk);

let unk2: unknown = { id: 5 };
console.log(unk2);

let unk3: unknown = unk2;
console.log("unk3", unk3);

let anyName: any = unk3;
console.log(anyName);

let myval: never;

// undefined & null
let y: undefined = undefined;

let z: null = null;

let bbv = null;
bbv = 7264;

var hwyr;
console.log(typeof hwyr);
