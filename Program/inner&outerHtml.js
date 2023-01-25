console.log("Inner and Outer Html");
/**
 * Notes ->
 * console.log -> it shows the element DOM tree
 * console.dir -> It shows the element as an object with is properties  
 */
let i=document.getElementById("text1001");
console.log(i);
console.log(i.innerHTML) //To get inner html msg
i.innerHTML="<i> hey this is Chandan</i>" // to set inner html
console.log(i.innerHTML)
//It only applicable for element Node not applicable for text and comment Node

console.log(i.outerHTML);  // It get element and inner html also

i.outerHTML="<div>Hey</div>"
console.log(i.outerHTML);


console.log(document.body.textContent) // get text