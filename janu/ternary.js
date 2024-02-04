// tenary-3 part

const age = 22;
// if(age >=18 ){
//     console.log('you can vote')
// }
// else{
//     console.log('ghumaiya thako')
// }

age >= 18 ? console.log('vote') : console.log('ghuma')

let price = 2000;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
//     // console.log(price)
// }
// else{
//     price += 100;
 
//     // console.log(price)
// }

// price = isLeader === true ?  0 : price + 100; 
// console.log(price)


if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price += 100;
}
// console.log(price)


price = isLeader === true ? 
            price > 1000 ?
                price = price / 2 : 
                0 : price + 100;