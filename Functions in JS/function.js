// Q1) What is function expression
const squre= function (x) {
    return x*x;
}
console.log(squre(5));

// ***************************************************************

function multiply(...nums) { //rest operator
    console.log((nums[0]*nums[1]));
}
const arr=[1,2];
multiply(...arr); //spread operator

// ********************************************************
//VVIP
let user={
     name: "Abhinandan",
     rc1:()=>{
        console.log(this); //in case of arrow function this points to the global window object
        console.log("My name is "+this.name);
     },
     rc2(){
        console.log(this); //in case of normal function this points to the user object
        console.log("My name is "+this.name);
     }
}

user.rc1();
user.rc2();

// output
// {}
// My name is undefined
// { name: 'Abhinandan', rc1: [Function: rc1], rc2: [Function: rc2] }
// My name is Abhinandan
