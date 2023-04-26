// an 'enum' is a special 'class' that represents a group of elements (unchangeable variables)
// enum come into 2 flavours: string and numeric

// numeric enums - default
enum CardinalDirections {
    North, 
    East, 
    South, 
    West
}

let currentDirection = CardinalDirections.South
console.log(currentDirection)


// numeric enums - initialized
enum CardinalDirections1 {
    North = 1, 
    East, 
    South, 
    West
}

let currentDirection1 = CardinalDirections1.South
console.log(currentDirection1)

// numeric enums - initialized
enum CardinalDirections2 {
    North = 744, 
    East = 965, 
    South = 357, 
    West = 468, 
}


let currentDirection2 = CardinalDirections2.South
console.log(currentDirection2)

enum CardinalDirections2 {
    North1 = 44, 
}


enum StatusCode {
    NotFound = 404, 
    Success = 200, 
    Accepted = 202, 
    BadRequest = 400
}

console.log(StatusCode.Accepted)

// string enums
enum CardinalDirections3 {
    North = "North", 
    East = "East", 
    South = "South", 
    West = "West"
}

console.log(CardinalDirections3.North)