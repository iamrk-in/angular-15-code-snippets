// union types are used when a value can be more than a single type
// such as when a property would be a string or number
// union - |
function printStatusCode(code) {
    console.log("my status code: ".concat(code));
}
printStatusCode(404);
printStatusCode('Page Not Found');
