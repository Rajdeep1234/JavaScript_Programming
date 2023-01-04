console.log("Loops");
//loops

// For Loop
let sum=1;
for(let i=1;i<=10;i++){
    console.log(i," ");
    sum*=i;
}
console.log("product of first 10 number is "+sum);

let name ={
    Rajdeep: 28,
    Dipak:20,
    Prative:21,
    Priya:12,
    Swastika:12,
    Angali:18,
    Sanjana:18
}
for(let a in name) { // to print keys - for-in loop
    console.log('Name :'+a+" with an age "+name[a]);
}
for(let b of "Rajdeep"){  // (for-of loop)it's used of Arrays and string
    console.log(b);  // print each character
}
//let having a block level scope but var having a golbal level scope


// while Loops
 let a =prompt("Enter the value of n :");
 a=Number.parseInt(a);
 while(a>=0){
    console.log(a);
    a--;
 }

 //do-while loop 
let n=10;  
do{   // Execute atleast once
    console.log(n);
    n--;
}while(n>5);