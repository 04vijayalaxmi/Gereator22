
function* add(a, b) {
    yield a + b;
}


function* subtract(a, b) {
    yield a - b;
}


function* multiply(a, b) {
    yield a * b;
}


function* divide(a, b) {
    if (b === 0) {
        yield 'Error: Division by zero is not allowed.';
    } else {
        yield a / b;
    }
}

// Testing the generators
const a = 10;
const b = 5;

const addGen = add(a, b);
console.log('Addition:', addGen.next().value);  

const subtractGen = subtract(a, b);
console.log('Subtraction:', subtractGen.next().value);  

const multiplyGen = multiply(a, b);
console.log('Multiplication:', multiplyGen.next().value);  

const divideGen = divide(a, b);
console.log('Division:', divideGen.next().value);  


const divideByZeroGen = divide(a, 0);
console.log('Division by zero:', divideByZeroGen.next().value);  
