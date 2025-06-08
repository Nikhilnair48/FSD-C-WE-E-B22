console.log("Start");
setTimeout(function A() {
console.log("Timeout A (200ms)");
}, 200);
setTimeout(function B() {
console.log("Timeout B (0ms)");
}, 0);
console.log("End");