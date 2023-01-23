

const DrivingAgeDetector =(numAge)=>{
    do{
        let input=prompt("Enter your age here");
        let numAge=Number.parseInt(input);
        if(numAge>18) alert("Congratulation, Your are able for driving");
        else if(numAge<=0) alert("Age not be in Negative");
        else alert("Sorry, you are not able to driving");
        repeat=confirm("Are you fatch the age again");
    }while(repeat==true)
    if(repeat==false){
        console.log("Thankyou")
    }
}
console.log(DrivingAgeDetector());