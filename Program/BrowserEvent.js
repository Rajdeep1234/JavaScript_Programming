/**
 * Notes ->
 * An event is a signal that something has happend.All the DOM nodes
 * generate such signals.
 * 
 * Some imp DOM events are  ->
 * 1.Mouse Events 2. keyboard Events
 * 
 */
let n =document.getElementById("id2");
// n.onclick = function onClick(){
//     console.log("You click on Go somewhere button");
// }

// Or

n.onclick=()=>{
    console.log("You click on Go somewhere button");
}
