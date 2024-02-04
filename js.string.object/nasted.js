const college ={
    name: 'Pirojpur clg',
    class: [ '11', '12', '20'],
    events: ['21 feb', '26 march'],
    unique: {
        color: 'blue',
        result:{
            gpa:5,                                
            merit:'top'
        }
    }

     }

    //  console.log(college.unique.color);
    college.unique.result.merit = 'top top topatop' 
    console.log(college['unique'].result.merit);
    college.events[1] = '16 Dec'
    console.log(college.events[1])
    delete college.class;
    console.log(college);