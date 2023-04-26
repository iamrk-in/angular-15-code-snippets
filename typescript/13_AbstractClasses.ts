// abstract classes : classes can be written in a way that allows them to be used as a base class for other class without having to implement all the members. 

abstract class Polygon3 {
    public abstract getArea3(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea3()}]`
    }
}

class Rectangle3 extends Polygon3 {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super()
    }

    public getArea3(): number {
        return this.width * this.height
    }
}

const myRect = new Rectangle3(5, 9);
console.log(myRect.getArea3)