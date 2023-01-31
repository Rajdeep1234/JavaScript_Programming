console.log("Set Interval and Set timeout in JS");
/**
 * Notes ->
 * setTimeout(functionName(){},Timein mili_sec);
 * 
 */


setTimeout(alert("Want Continue"),2000);

//or

console.log("This is the demo of setTimeout");
	
function alertAfter3Seconds() {
	alert("3 Second completed hi!");
}
setTimeout(alertAfter3Seconds, 3000);  

//or

let a;
let n=setTimeout(function timesOut(){
    a=prompt("Are you want to continue (y/n)?")
},2000);
if(n=='y'){
    clearTimeout(a)  // To stop timesOut
}
