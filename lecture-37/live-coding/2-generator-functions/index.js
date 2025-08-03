let number = 0;
function countUp() {
    number++;
}

function* countUp() {
    console.log("Start");
    yield 1;            // pauses the execution; returns 1
    console.log("Resumed");
    yield 2;            // pause again; return 2
    return 3;
}

const test = countUp();
console.log(test);
console.log(test.next());
console.log(test.next());
console.log(test.next());
