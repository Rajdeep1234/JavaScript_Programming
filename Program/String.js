let name ="Rajdeep";
console.log(name.length);

let friend='Chandan';
console.log(friend.length);

console.log(name[1]);
console.log(friend[1]);


//Template Literals
let boy1="Rajdeep";
let boy2="Chandan";
/* we can insert varible directly in templets literals,
*  this is called string interpolation
*/
console.log(`boy1 is a friend of boy2`);
console.log(`${boy2} is a friend of ${boy1}`);


//Escape Sequence Characters
let fruits = 'Mangoes\'Banana'; // \ - treates as an escape sequence character
let fruit = "Mangoes\"Banana";
let flower = 'Lotus\nSunflower' // \n - new line
console.log(fruits)
console.log(fruit)
console.log(flower)
