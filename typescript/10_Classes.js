// members : types
// class PersonData {
//     name: string = 'john'
// }
// const person1 = new PersonData()
// console.log(person1.name)
// members: visibility
// public - (default) allows access to the class member from anywhere
// private - only allows to the class member from with in the class
// protected - allows access to the member from itself and any classes that inherit it, which is covered in the inheritance 
var PersonData = /** @class */ (function () {
    function PersonData(name) {
        this.name = name;
    }
    PersonData.prototype.getName = function () {
        return this.name;
    };
    return PersonData;
}());
var person1 = new PersonData('jane');
console.log(person1.getName());
var person2 = new PersonData('adam');
console.log(person2.getName());
var person3 = new PersonData('clark');
console.log(person3.getName());
// parameter properties
var PersonData2 = /** @class */ (function () {
    function PersonData2(name) {
        this.name = name;
    }
    PersonData2.prototype.getName2 = function () {
        return this.name;
    };
    return PersonData2;
}());
var person11 = new PersonData2("paul123");
console.log(person11.getName2());
// readonly
var PersonData3 = /** @class */ (function () {
    function PersonData3(name) {
        this.name = name;
    }
    PersonData3.prototype.getName3 = function () {
        return this.name;
    };
    PersonData3.prototype.setName3 = function (name) {
        this.name = name;
    };
    return PersonData3;
}());
var person111 = new PersonData3("qwerty");
console.log(person111.getName3());
person111.setName3("mnbvc");
console.log(person111.getName3());
