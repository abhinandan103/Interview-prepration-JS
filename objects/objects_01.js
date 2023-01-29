const user = {
  name: "Abhinandan",
  age: "26",
  "adding a space": true, // this is an example of how to add space as a key
};
console.log(user["adding a space"]);

const property = "firstName";
const name1 = "Abhinadnan";
const obj = {
  [property]: name, //This is how we add dynamic property to objects
};
console.log(obj);

//looping throwugh objects
for (key in user) {
  console.log(key, user[key]);
}

//find the output of the below code

const obj1 = {
  a: 1,
  b: 2,
  a: 3,
};

console.log(obj1); // this is the output { a: 3, b: 2 }

//create a function multiply by 2 which will multiply all the numeric in nums by 2;
let nums = {
  a: 1,
  b: 2,
  c: "This is a string",
};
multiplyby2(nums);
function multiplyby2(nums) {
  for (keys in nums) {
    if (typeof nums[keys] === "number") {
      console.log("YES");
      nums[keys] *= 2;
    }
  }
}

console.log(nums);


// question on spread operator
console.log([..."Abhinandan"]);

const user1={"name":"Abhi", "age":26};
const admin={"is valid":true, ...user1};
console.log(admin)


//json stringify it converts the object into string
const setting={
  username:"Abhi",
  level:50,
  health:100,
}

const out=JSON.stringify(setting,["level","health"]); // this will stringify only level and health
const out1=JSON.stringify(setting);
console.log(out);

// ******************************************************************

const shape={
  radius:10,
  diameter(){
    console.log(this.radius*2);  //20
  },
  parameter:()=>{
    console.log(this.radius*10); // undefined because in case of arrow function this points to gloabal window object
  }
};

shape.diameter();
shape.parameter();


// *********************************************************************

// What is destructuring in objects
destructuring in objects means taking out a property from the object
let user1={
  name:"Abhinandan",
  age:26
};

const {name}=user1;
const{ name:myName}=user1;
console.log(name); // Abhinandan
console.log(myName); // Abhinandan


// Nested destructuring

let user2={
  name:"Abhinandan",
  age:26,
  fullname:{
    firstName:"deepu",
    lastName:"kumar",
  },
};

const {fullname:{firstName}}=user2;
console.log(firstName);



// ***************************************************************

