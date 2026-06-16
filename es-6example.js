//let
let studentcount=10;
studentcount=11;
console.log("studentcount",studentcount);

//const
const collegeName="vellalar";
console.log("collegeName",collegeName);

//template

let studentname="arun";
console.log(`welcome ${studentname} to ${collegeName}`);

//object
const student={
    name: "arun",
    age:20,
    department:"ai&ds",
}
    console.log(student)

//destructing
const people ={name:"imrana", age:20 };
const {name,age} = people;
console.log(name);
console.log(age);

//arrow function
const add =(a,b) => (a+b);
console.log(add(4,4))

//const displaystudent=() => {
    //console.log(`studentname:${name}`);
//}
//console.log(displaystudent)


//array
const person=["arun","diya","tara"];
console.log(person[0]);

//spread
const updateperson=[...person,"loki"];
console.log(updateperson);