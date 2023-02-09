console.log("Introduction of Call back in Javascript");

//Synchronous Programming

// let name=prompt("Please enter your name : ")
// let age=prompt("Please enter your age :")
// let favCol=prompt("What is your fevorite color?");
// console.log(name+" has "+age+" years old and has "+favCol+" fevorite color.");

// Asynchronous programming

console.log("start");  //First Print
setTimeout(function(){     //After 4sec it will print
    console.log("Hey i am Good")
}, 4000);
console.log("End"); //Second Print