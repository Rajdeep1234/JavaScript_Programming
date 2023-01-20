console.log("This is Rajdeep");

alert("Good Afternoon Rajdeep");

let input=prompt("Please Enter the size of array");
console.log(input);
console.log(typeof(input)); //input always in a string type
let num=Number.parseInt(input);
console.log(typeof(num));

let get=prompt("Enter your name here");
let write=confirm("Please click on Ok to write on console"); // true or false
if(write){
    console.log(get);
}
else{
    console.log("Please enter you name here");
}


