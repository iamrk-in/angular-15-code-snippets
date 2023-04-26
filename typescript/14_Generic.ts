// generics: allows creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// makes it easier to write reusable code

// functions: 
function createPair<S1, T1>(v1: S1, v2: T1): [S1, T1] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 43))

// classes: 