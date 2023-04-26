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

class PersonData {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name
    }

}

const person1 = new PersonData('jane')

console.log(person1.getName());

const person2 = new PersonData('adam')
console.log(person2.getName());

const person3 = new PersonData('clark')
console.log(person3.getName());


// parameter properties
class PersonData2 {
    public constructor(private name: string) {
        
    }

    public getName2(): string {
        return this.name
    }

}

const person11 = new PersonData2("paul123");
console.log(person11.getName2())

// readonly
class PersonData3 {
    private readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName3(): string {
        return this.name
    }

    public setName3(name: string) {
        this.name = name
    }
}

const person111 = new PersonData3("qwerty")
console.log(person111.getName3())
// person111.setName3("mnbvc");
// console.log(person111.getName3())


