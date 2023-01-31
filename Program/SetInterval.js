console.log("Set Time Intervals");
/**
 * Notes -> 
 *  
 * 
 */
let interval;
let n=setInterval(function Interval(){
    interval=prompt("Want to continue (y/n) ?")
    console.log(typeof(interval));
},5000);
if(interval=="n"){
    clearInterval(n);
}