const person = {
    name: 'avi',
    age:22,
    salary: 15000,
    married:false,
    'fav places':['Bandarbon','Kuyakata', 'Sundarbon']
}

person.salary=30000;
person['age']=30;

const keyName = 'name';
person[keyName]= 'Error';
console.groupCollapsed(person);
