// Rule of thumb
// for all regular function call this refers to the global window object
console.log(this);
const users = {
  name: "Abhinandan",
  lastname: "sharma",
  fullname: function () {
    console.log(this); //  here this refers to the users object
    console.log("full name is " + this.name + " " + this.lastname);
    function greet() {
      console.log(this); // here this will point to global window object
    }
    greet(); // this is a normal function call so remember the basic rule of thumb
  },
};
console.log(users.fullname());

// VVIP
// When a arrow function is used, "this" keeps on referring to the this of the parent function
const obj = {
  age: 26,
  myfun: () =>{
    console.log(this); //this here refers to the global object
    console.log(this.age);
 },
};

obj.myfun();


const users2 = {
    name: "Abhinandan",
    lastname: "sharma",
    fullname: function () {
      console.log(this); //  here this refers to the users object
      console.log("full name is " + this.name + " " + this.lastname);
      const greet = () => {
        console.log(this); // here this will point to parent fullname function this which is an object
        console.log(this.name, this.lastname);
      }
      greet(); // this is a normal function call so remember the basic rule of thumb
    },
  };

  users2.fullname();