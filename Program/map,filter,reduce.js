console.log("Map, Filter, Reduce method in javascripts");

let arr=[3,44,35,67,89,34,23];

//map --> It create a new array
let a = arr.map((element)=>{
    return element+1;
})
console.log(a);

//or

let b=arr.map((value,index,array)=>{
    console.log(value, index, array);
})

//filter -->

let arr2=[45,23,56,7,8,9,4,25];
 let a2=arr2.filter((a)=>{
    return a<10; //it cannot modify the original array
 })
 console.log(a2);
console.log("-------------------------------------------------")


 //reduce -->

let arr3=arr2.reduce((raj1,raj2)=>{
    return raj1+raj2;
})
console.log(arr3); // get two element than add then get sum and next element then add then get sum and next element than add and so on

// or

const reduce_sum=(h1,h2)=>{
    return h1+h2;
}
let arr4=arr2.reduce(reduce_sum);
console.log(arr4);