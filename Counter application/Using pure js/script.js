
function onIncrement(){
    // let countE=document.getElementById("counter");
    let count=countE.innerText;
    let increment=parseInt(count) + 1;
    countE.innerHTML=increment;
}
function onDecrement(){
    // let countE=document.getElementById("counter");
    let count=countE.innerText;
    let increment=parseInt(count) - 1;
    countE.innerHTML=increment;
}
function onReset(){
    // let countE=document.getElementById("counter");
    countE.innerHTML=0;
}

let root=document.getElementById("root");
let countE=document.createElement("h1");
let btn1=document.createElement("button");
btn1.setAttribute("onClick","onIncrement()")
let btn2=document.createElement("button");
btn2.setAttribute("onClick","onDecrement()")
let btn3=document.createElement("button");
btn3.setAttribute("onClick","onReset()")
btn1.innerHTML="increment";
btn2.innerHTML="decrement";
btn3.innerHTML="reset";
countE.innerHTML=0;
root.appendChild(countE);
root.appendChild(btn1);
root.appendChild(btn2);
root.appendChild(btn3);