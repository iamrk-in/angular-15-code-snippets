// Type Aliases allows defining types with a Custom Name
// Type Aliases can be used for primitives like string, or comples types: objects

type CarYear = number
type CarType = string
type CarModel = string

type Car = {
    year: CarYear, 
    type: CarType, 
    model: CarModel
}

const carYear: CarYear = 2011
const carType: CarType = "Toyato"
const carModel: CarModel = "Corolla"

const carC: Car = {
    year: carYear, 
    type: carType, 
    model: carModel
}

// PersonId, PersonName, PersonAge
type PersonId = number
type PersonName = string
type PersonAge = number

type Person = {
    id: PersonId, 
    name: PersonName, 
    age: PersonAge
}

const personId: PersonId = 633
const personName: PersonName = "john"
const personAge: PersonAge = 22

const person: Person = {
    id: personId, 
    name: personName, 
    age: personAge
}

console.log(`id: ${person.id}`)

// interfaces - are similar to type aliases, except they only apply to object types
interface Rectangle {
    height: number, 
    width: number
}

const rectangle: Rectangle = {
    height: 23, 
    width: 65
}

console.log(`Rect: ${rectangle.height}`)


interface User {
    id: number, 
    name: string
}

const user: User = {
    id: 75, 
    name: "asdfg"
}

// extending interfaces
interface Rectangle1 {
    height: number, 
    width: number
}


interface ColoredRectangle extends Rectangle1 {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 5, 
    width: 8, 
    color: "red"
}