// inheritance: implements
// interfaces can be used to define the type a class must follow through implements keyword
// interface Shape {
//     getArea: () => number
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}

//     public getArea(): number {
//         return this.width * this.height
//     }
// }

// const myRect = new Rectangle(10, 20)
// console.log(myRect.getArea())


// inheritance: extends
// classes can extend each other through the extends keyword. 
// a class can only extends one other class

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    
    public constructor(width: number) {
        super(width, width)
    }

    doCal(): number {
        return (this.width + this.width)
    }
}

const mySq = new Square(18)
console.log(mySq)
console.log(mySq.doCal())

