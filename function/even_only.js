
function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}    

const numbers = [39, 12, 56, 77, 35, 68];

// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens);



function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2===0){
            console.log(number);
            sum = sum = number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('sum of the number is', sum)