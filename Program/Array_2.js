let arr =[4,57,3,4,88];
console.log(Object.keys(arr)); //index


console.log(typeof(arr.toString()));
console.log(arr);

let c=arr.join("-");
console.log(c);

let newArr=[4,6,47,56,37];
console.log(arr);
let num =arr.pop();  // removed last element

console.log(arr);
console.log(num);
arr.push(55);
console.log(arr)

let r=arr.shift(); // removed element front of the array
console.log(arr);
console.log(r);

let h=arr.unshift(43); //add element front of the array
console.log(arr);