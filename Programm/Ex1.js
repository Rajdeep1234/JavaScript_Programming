console.log("This is Rajdeep");
let a="Rajdeep"; // var a =9;

// difference between var/const/let
var b ="Rajdeep";
{  // making blank block
    let a="Gupta";
    console.log(a);
}
console.log(a);//Print
{
    var b="Gupta"; //var change a keyword permantly
    console.log(b);
}
console.log(b);
const author="Rajdeep Gupta"; //constant can't be change
console.log(author);