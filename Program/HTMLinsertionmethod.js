console.log("Hey I am Rajdeep");
/**
 * Notes ->
 * Add Element in DOM
 * 
 */
// let a = document.getElementById("id1");
// a.innerHTML=a.innerHTML+'<h3>Hello World</h3>'; // Classica Approach
// console.log(a.innerHTML);
// or
let div=document.createElement('div');
div.innerHTML='<h2>New Approach</h2>';
console.log(div.innerHTML);
