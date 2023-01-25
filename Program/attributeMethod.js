console.log("Attribute Method");
/**
 * Notes ->
 * 
 * 
 */
let getAttribute=index1.getAttribute("class"); // extract the attribute of the class which is heading
console.log(getAttribute);

console.log(index1.hasAttribute("class"));

index1.setAttribute("class","class1");  // set Attribute
console.log(index1.getAttribute("class"));

// index1.removeAttribute("class");
// console.log(index1.hasAttribute("class"));  // Removed Attributed

console.log(index1.attributes);