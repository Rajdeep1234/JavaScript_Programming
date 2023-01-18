let a=45;
let b=55;

console.log("Average of a and b is :"+(a+b)/2);
//function

/*
function function_Name (Parameter_1,Parameter_2){ // Parameter behave like a local veriable
    Logic there;
    return result;
}

function function_Name()){
    Logic there;
    return result;
}
*/
console.log("Useing Function");
function avg (p1,p2){
    console.log('Done');
    return Math.round((p1+p2)/2);
}
console.log("Average of a and b is :"+avg(a,b));

// **Arrow Function
const sum = (p,q)=>{
    return p+q;
}
console.log("Average of a and b is :"+sum(a,b));

//or ****
const hello = ()=>{
    console.log("Hey how are you. I'm to fine yaar");
}
hello();