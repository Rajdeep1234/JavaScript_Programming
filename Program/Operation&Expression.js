/*Operation and Expression in javascript 
*/
// Arithmetic Operator
let a=44;
let b=5;
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a/b =",a/b); // In divide we received a float value
console.log("a*b =",a*b);

console.log("a**b =",a**b); // 44^5 -- Power a^b
console.log("a%b =",a%b); //Modulo Operator
//Incremental Opearator
console.log("a++ =",a++);
console.log("a =",a);
console.log("++a =",++a);
console.log("a-- =",a--);
console.log("--a =",--a);

// Assignment Operator
a=8;
console.log("a =",a);
console.log("a+5 =",a+=5);
console.log("a =",a);
//console.log("a+a =",a+=a);
console.log("a*5 =",a*=5);
console.log("a =",a);
console.log("a**5 =",a**=5);
a=10;
console.log("a =",a);
console.log("a%4 =",a%=4);

//Comparion Operator

let c1=45;
let c2="45";
console.log("c1 == c2",c1==c2);
console.log("c1 != c2",c1!=c2);
console.log("c1 === c2",c1===c2);
console.log("c1 !== c2",c1!==c2);
console.log("c1 > c2",c1>c2);

//Logical Operator -- Opearted on Booleans
let x=8;
let y=9;
console.log(x<y && x==y);  // && - And operator
console.log(x<y && x!=y);
//Or Operator
console.log(x<y || x==y);
console.log(x<y || x!=y);
//Not Opeartor
console.log(!false);
console.log(!true);