let arr = [12,23,34,45,56,67,78,89];

//splice and slice
/*  Note
*splice - add new element after removing element
splice (2,3,45,56,78) // 2->idx where to start ,3-> 3 element remove
,45,56,78---> new element we want to add


*======================================================================*/
arr.splice(3,2,1011,1023);
console.log(arr);

let removedEle=arr.splice(5,2,2043,2067); // for getting removed element 
console.log(removedEle);

let newArr=arr.slice(0,5);
console.log(newArr);


let myArray=[12,23,34,45,67,89,56];

for(let i=0;i<myArray.length;i++){
    console.log("Element "+myArray[i]+" having  a key "+Object.keys(myArray)[i]);
}
let j=0;
while(j<myArray.length){
    console.log(myArray[j]);
    j++;
}
console.log("---------------------------------------");
let k=0;
do{
    console.log(myArray[k]);
    k++;
}while(k<myArray.length);

console.log("---------------------------------------");
myArray.forEach((element)=> {   // print square of each value
    console.log(element*element);
})

let name="Rajdeep";
let nameArr=Array.from(name);  //To create an array in string format
console.log(nameArr);

console.log("---------------------------------------");

for(let item of nameArr){
    console.log(item);   // For-of return each item
}

console.log("---------------------------------------");

for (let i in nameArr){
    console.log(i)       // Fir-in return idx of each item
    console.log(nameArr[i]);  // ti get each element 
}


