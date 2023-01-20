//alert("Hi rajdeep");
console.log("Hay Rajdeep");

//different console methods
let n1=555;
let n2=123;
console.assert(n1<n2); // for false condition AssertionFailed msg is displayed

console.clear(); // to clear console

let obj ={"Rajdeep":1,"Prativa":2,"Chandan":3,"Dipak":4};
console.table(obj);  /// It showing in a tabular form

console.warn("Hay please Don't sleep"); // Warn msg

console.info("Info"); // Log and Info are much similar

console.time("forLoop");  //Timmer Started
let arr =[12,24,56,77,4,53];
for(let n of arr){
    console.log(n);
}
console.timeEnd("forLoop"); // Timmer End

console.time("doubleForLoop")
for(let n of arr){
    console.log(n);
}
console.timeEnd("doubleForLoop")