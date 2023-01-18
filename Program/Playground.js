console.log("Hay, This is Rajdeep");
let a=23;
let b=45;
 function product(n1,n2){
    console.log("Product Operation Done");
    return (n1*n2);
 }
 console.log("Product of the given two number is "+product(a,b));


 // Arrow Function 

 const multiply=(a,b)=>{
    return (a*b)
 }

 const name=()=>{
    return "Rajdeep";
 }
console.log(name());
console.log("Product of the given two number is "+multiply(a,b));
