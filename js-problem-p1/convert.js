// 12 inch 1 feet

function inchTOfeet(inch) {
    const feet =inch /12;
    return feet;
}


function inchTOfeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch';
    return result;
}

const shuvoHeight = inchTOfeet(75);
const shuvoHeight2 = inchTOfeet2(75);
console.log(shuvoHeight);
console.log(shuvoHeight2);



function mileToKilometer(mile){
    const kilo =mile*1.60934;
    return kilo;
}
const result =mileToKilometer(50);
console.log(result);