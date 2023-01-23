/**
 * 
 * Children -> Direct as well as deeply nested elements of an element 
 * are called children
 * 
 * child Nodes -> Elements that are directly children
 * ex- Head & Body are the children of Html
 * Head and Body both are siblings to each other
 * 
 * Descendent Notes-> All nested eleemnts,children,their children and so on
 * 
 * 
 * 
 * 
 * */

//first child
console.log(document.body.firstChild) // next line thats way next node
//for firstchild it also count the text node (blank/Space)
console.log(document.body.lastChild) // script
console.log(document.lastChild)
console.log(document.body.childNodes) //get all child nodes in a form of Node list

console.log(document.body.childNodes[0])  // first childNode
let a=document.body.childNodes;
let size=a.length;
console.log(size);
console.log(document.body.childNodes[size-1]); // last child nodes

//It is not an array
//To make it an arrat
let arr=Array.from(a);
console.log(arr)


//hasChildNodes() -(true/false)
console.log(document.body.hasChildNodes());



