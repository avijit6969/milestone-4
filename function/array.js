function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number; // Fix: add 'number' to 'sum', not 'numbers'
    }
    return sum;
}

const numbs = [4, 6, 8, 5];
const sum = sumOfNumbers(numbs);

console.log('sum of numbers is', sum);
