// Type Aliases allows defining types with a Custom Name
// Type Aliases can be used for primitives like string, or comples types: objects
var carYear = 2011;
var carType = "Toyato";
var carModel = "Corolla";
var carC = {
    year: carYear,
    type: carType,
    model: carModel
};
var personId = 633;
var personName = "john";
var personAge = 22;
var person = {
    id: personId,
    name: personName,
    age: personAge
};
console.log("id: ".concat(person.id));
var rectangle = {
    height: 23,
    width: 65
};
console.log("Rect: ".concat(rectangle.height));
