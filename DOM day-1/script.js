const res=document.getElementById("access")
console.log(res);
// by default query selector will look for tags
const tag=document.querySelectorAll("h1")
console.log(tag)
// remeber # is used to slect id's and . is used for class
const ids=document.querySelector("#access")
console.log(ids);

// If there are multiple same class or tag then query selector will only return the first class or tag that matches with it.
// That's why it is recommended to use querySelectorAll 
const cls=document.querySelector(".test")
console.log(cls);

