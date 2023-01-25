console.log("Hay this is rajdeep here");
/**
 * Notes ----->
 * DOM Searching methods --> Matches/Closest/contains
 * elem.matches(css)-> To check if element matches the given css selector
 * elem.closest(css)-> To look for the nearest ancester that matches the given css-selector.The elem itself is alos checked
 * elem.contains(elem)->Reture true if elemB is inside elemA(a descendant of elemA) or when elemA==elemB
 * 
 */
//matches
console.log(id1);  // It's working but it is not a good practice
let idx1=document.getElementById("id1");
console.log(idx1);  // good practice
console.log(idx1.matches(".card"));  // because id1 has .card css selector
console.log(idx1.matches(".d-flex")); // false 

// clostest
let idx2=document.getElementById("text123");
console.log(idx2);
console.log(idx2.closest("#id1"));  // started from child then moved towards parents css selector


//contains
let n=document.getElementById("id3");
console.log(n);
console.log(n.contains(id2));  // n contains(id2)
console.log(n.contains(idx1));