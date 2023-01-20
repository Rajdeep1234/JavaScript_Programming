let a=[1,2,3,4,5,4,7,8,9];
console.log(a.length);
// for(let i=0;i<a.length;i++){
//     console.log(a[i]+" ");
// }
console.log(a[3]==a[5]);
const fruit=[];
fruit.push("Mango","Apple","Orange");
console.log(fruit); /// Push element in an array
console.log(Object.keys(fruit))
let length=prompt("Enter the length of the array :");
let array=[length];
for(let i=0;i<length;i++){
    array[i]=prompt("Enter "+(i+1)+" fruit name here");
}
console.log(typeof(array));
console.log(array);


