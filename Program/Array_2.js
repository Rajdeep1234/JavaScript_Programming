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
console.log(arr.length);

delete arr[2];
console.log(arr); // delete but array length not affected
console.log(arr.length);

let bigArr = arr.concat(newArr);
console.log(bigArr);

let advArr=bigArr.concat(arr,newArr);
console.log(advArr);

let myArr=[9,8,7,6,5,4,3,2,1]
myArr.sort(); /// It sort array in an alphabatically
console.log(myArr) // And it change the original array

let data = [123,234,345,456,567,678,789,890,900,9,8,7,6,5,4,3,2,1]
data.sort();
//Alphabatically --> start with 1 then 2 then 3 then 4 and so on.
console.log(data);

//Array sort

let compare=(a,b)=>{
    return a-b; // Assending Order
    //return b-a; //Decending Order
}
data.sort(compare);
console.log(data);

data.reverse();
console.log(data);


