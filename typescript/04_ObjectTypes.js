var car0 = ["tayota", "corolla", 5262];
console.log(car0[1]);
// object types
var car = {
    type: "tayota",
    model: "corolla",
    year: 6442,
};
console.log("type: ".concat(car["type"], ", model: ").concat(car["model"], ", year: ").concat(car["year"]));
car.type = "tayoa";
console.log("type: ".concat(car["type"], ", model: ").concat(car["model"], ", year: ").concat(car["year"]));
// type inference
var car2 = { type: "toyota" };
car2.type = "toyato";
console.log("car type: ".concat(car2.type));
car2.type = "benz";
console.log("car type: ".concat(car2.type));
// optional properties
var car3 = { type: "qwerty" };
console.log("car type: ".concat(car3.type, ", mileage: ").concat(car3.mileage));
// index signatures
var nameAgeMap = {};
nameAgeMap.jack = 24;
console.log("nameAgeMap: ".concat(nameAgeMap.jack));
