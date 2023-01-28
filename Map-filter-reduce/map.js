const arr=[1,2,3,5,6];
const mapres=arr.map((arr)=> arr+2);
console.log(mapres);
//map function returns a new array
// in map we can do the chaining whereas in foreach function we can not do the chaining

// foreach does not return a new array
arr.forEach((ele,index)=>arr[index]=ele+2);
for(const ele of arr){
    console.log(ele);
}

