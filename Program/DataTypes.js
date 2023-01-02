// nn bb ss u
let a = null;
let b = 345;
let c = true;
let d = BigInt("546")+BigInt("54");
let e = "Rajdeep";
let f = Symbol("i am a nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof(d));

// Objects in js - Non-primitive datatype
const item = {
    "Rajdeep": true,
    "Harry": false,
    "babber":45,
    "sagar": undefined
}
console.log(item["Rajdeep"]);
console.log(item["babber"]);
console.log(item["Harry"]);
console.log(item["sagar"]);
console.log(item["Garry"]); // not in objects