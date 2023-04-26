"use strict";
/* explicit */
let firstName = "ryan";
// implicit
let lastName = "dyan";
// error
let fullName = "asfd";
fullName = "46";
let age = 66;
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
let statu = true;
console.log(statu);
let name1 = { name: "jk" };
console.log(name1);
name1 = 63;
let unk = 1;
console.log(unk);
let unk2 = { id: 5 };
console.log(unk2);
let unk3 = unk2;
console.log("unk3", unk3);
let anyName = unk3;
console.log(anyName);
let myval;
// undefined & null
let y = undefined;
let z = null;
let bbv = null;
bbv = 7264;
var hwyr;
console.log(typeof hwyr);
