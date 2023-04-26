// override: when a class extends another class, it can replace the members of the parent class with the same name
interface Shape2 {
    getArea: () => number;
}

class Rectangle2 implements Shape2 {
    public constructor(protected readonly width: number, protected readonly height: number) {}
    public getArea(): number {
        return this.width * this.height
    }

}

class Square2 extends Rectangle2 {
    public constructor(width: number) {
        super(width, width)
    }

    public override toString(): string {
        return `Square[width: ${this.width}]`
    }
}

const mySq2 = new Square2(7);
console.log(mySq2.toString())