/*
DOM Collection - They read only.they are live elememt childnodes variable
will automatially update if childnodes of an element is changed. they are 
iterable using for of loop.

siblings = child of the same parent ex- for HTML head and body are siblings
body is next and right siblings of head and head is previous and left siblings of body

*/
console.log("This is Rajdeep"); 
console.log(document.body.firstChild);
console.log(document.body.parentNode); // Parent Node (It should be a Node)
console.log(document.body.parentElement); 
console.log(document.documentElement) // html element
console.log(document.documentElement.parentElement);  
console.log(document.documentElement.parentNode);