console.log("Searching in DOM")

/**Notes-->
 * DOM navigation properties are helpful when the elements are close to each other
 * 
 */

let cTitle=document.getElementsByClassName("card-title")[0];
cTitle.style.color="red"; /// to make card title is red


let cText=document.getElementById("text123");
cText.style.color="purple";
cText.style.fontStyle="italic";

//By CSS selector
let ctitle=document.querySelectorAll(".card-text"); // for class . and is #
ctitle[0].style.color="blue";
console.log(ctitle);

document.querySelector(".btn-primary").style.color="black";// It select the first element

console.log(document.body.getElementsByTagName("a"));


