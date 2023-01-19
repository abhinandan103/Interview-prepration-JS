const arr=["Abhinandan","sharma","NI"];
for(const i in arr){
    console.log(i);
}

// output 0 1 2
for(const i of arr){
    console.log(i)
}

let obj={
    name:"abhi",
    lastname:"sharma",
}

for(const i in obj){
    console.log(i)
}
// output: name lastname

// in is used to access the keys. so in case of array we would need to some arr[i]
// but in case of objects there is not indexing and we can access value only with the help
// of keys only hence in case of objects for of does not work