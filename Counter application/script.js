
function onIncrement(){
    let countE=document.getElementById("counter");
    let count=countE.innerText;
    let increment=parseInt(count) + 1;
    countE.innerHTML=increment;
}
function onDecrement(){
    let countE=document.getElementById("counter");
    let count=countE.innerText;
    let increment=parseInt(count) - 1;
    countE.innerHTML=increment;
}
function onReset(){
    let countE=document.getElementById("counter");
    countE.innerHTML=0;
}
