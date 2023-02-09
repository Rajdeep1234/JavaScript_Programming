console.log("Arrow Functions Tutorial")

let seyHello=()=>{
    console.log("Hello Rajdeep");
};
seyHello();

let calculateCost =(ticketPrice,noOfPersion)=>{
    let totalCost=ticketPrice*noOfPersion;
    return totalCost;
}
console.log(calculateCost(250,6));

//Only One Parameter
trip=place=>"Trip to "+place;
console.log(trip("Delhi"));

trip=_=>"Trip to "+_;
console.log(trip("Mumbai"));