const address ='pirojpur';
const part = address.slice(2, 5)
console.log(part);

const sentence ='i am a bad boy';
// console.log(sentence.split(' '))
console.log(sentence.split('a'));


const friendsStr = 'Hafsa,Munni,Jemi,Toma';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = [ 'Hafsa', 'Munni', 'Jemi', 'Toma' ]
console.log(realFriend.join('-'));