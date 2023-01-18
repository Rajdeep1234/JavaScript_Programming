console.log("String Important Methods");
let name ="Rajdeep";
console.log(name.length);
/*
\n -> new line
\t -> new tab
\r -> Carriage return
*/
console.log(name.toUpperCase()); // Built-in function
console.log(name.toLowerCase());
console.log(name.slice(0,3));
console.log(name.slice(3));
let newName=name.replace("Rajdeep","Chandan");
console.log(newName);
let name3=name.concat(newName);
console.log(name3);

let friendName="    Nishant  ";
friendName=friendName.trim();
console.log(friendName);
let firstName="  R  a jde e   p";
firstName=firstName.replaceAll(" ","");
console.log(firstName.split("")); // split a string to become an array
console.log(firstName);
