// casting is a process of overriding a type

// casting with 'as'

let x: unknown = 'qwer'
console.log((x as string).length)


let y: unknown = 4;
console.log((y as string).length)


// console.log((4 as string).length)

// casting with <>
let a: unknown = 'john'
console.log((<string>x).length)

// fore casting
// to override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type
let x1 = 'hello'
console.log(((x1 as unknown) as string).length)
