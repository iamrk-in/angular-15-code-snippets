const car0: [string, string, number] = ["mK13", "corolla", 5262];
console.log(car0[1]);

// object types
const car: { type: string; model: string; year: number } = {
  type: "tayota",
  model: "corolla",
  year: 6442,
};

console.log(
  `type: ${car["type"]}, model: ${car["model"]}, year: ${car["year"]}`
);

car.type = "tayoa";

console.log(
  `type: ${car["type"]}, model: ${car["model"]}, year: ${car["year"]}`
);

// type inference
const car2 = { type: "toyota" };
car2.type = "toyato";
console.log(`car type: ${car2.type}`);

car2.type = "benz";
console.log(`car type: ${car2.type}`);

// optional properties
const car3: { type: string, mileage?: number} = {type: "qwerty"}
console.log(`car type: ${car3.type}, mileage: ${car3.mileage}`)

// index signatures
const nameAgeMap: {[index: string]: number} = {}
nameAgeMap.jack = 75
console.log(`nameAgeMap: ${nameAgeMap.jack}`)
