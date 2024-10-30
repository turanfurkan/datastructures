const factorial = (n) => {
    
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(`1 Factorial = ${factorial(1)}`);
console.log(`2 Factorial = ${factorial(2)}`);
console.log(`3 Factorial = ${factorial(3)}`);
console.log(`4 Factorial = ${factorial(4)}`);
console.log(`5 Factorial = ${factorial(5)}`);
console.log(`6 Factorial = ${factorial(6)}`);
console.log(`7 Factorial = ${factorial(8)}`);