// Destructuring of array and objects
// This is array destructuring
const arr=[1,2,3,4];
const [a,b,c,d]=arr;
console.log(a,b,c,d);
// **********************************************
// object destructuring
const obj={
    name:"Abhi",
    lastname:"Sharma",
}

const {name,lastname}=obj;
console.log(name,lastname);

// ************************************************
// template literal

const studentName="Abhinandan";
const msg="Happy birthday";

console.log(studentName + " "+ msg); //method 1
console.log(`${studentName}${msg}`); //space is not added here
console.log(`${studentName} ${msg}`); //space is added here
console.log(`${studentName} ${msg} Have a blast brooooo!!`); //space is added here


// spread operator

// copy all element of array or objects into another array or object
const num1=[1,2,4]
const num2=[5,6,8,9]
const num3=[...num1,...num2]
console.log(num3);

const myvehichle={
    name:"AUDI",
    color:"Red",
}

const myFamilyName={
    name:"Sharma",
    middlename:"kumar",
}

const mydetails={...myvehichle,...myFamilyName}
console.log(mydetails);  // notice here name is overriden by myFamilyName

// Rest operator

const mynum=[1,2,33,4,45,5,6,7,8];
const [a1,b1,...rem]=mynum;
console.log(a,b,rem);


function a123(a4,...b5) {
    console.log(a4,b5);
}

a123(1,2,3,4);
