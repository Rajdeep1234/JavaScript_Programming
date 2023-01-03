console.log("Conditional Expression in JavaScript")
let a = prompt("Hey whats your age?");  //to take input
console.log(a);
console.log(typeof(a));  // Always a string
//alert
//alert("Good Afternoon Rajdeep!")

//Convert a string to integer
let n=Number.parseInt(a);
console.log(n);
console.log(typeof(n));
if(n>0){
    alert("This is a valid age");
}
else if(n>99) alert("Please enter a valid age");
else alert("Please enter a valid age");

// Switch Case

const fruit=prompt("Which fruit do you need ?");
switch(fruit){
    case 'Papayas':
    console.log("Papayas are Rs-80/Kg");
    break;
    case 'Oranges':
    case 'Mangoes':
        console.log("Mangoes are Rs-60/Kg");
        break;
    default:
        console.log('Sorry fruit is not having there');    
}

//Tarnary Operator

const marks=prompt('Enter your marks there');
let Marks=Number.parseInt(marks);
if(Marks>60){
    (Marks>70)? console.log('Able to take admission'):console.log('Sorry, you are not able');
}
else console.log("Not Eligible");