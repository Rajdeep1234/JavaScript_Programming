//Nested Function

function giveMessage(msg){
    let userMsg=msg;
    function toUser(UserName){
        let name=UserName;
        let greet=userMsg+" "+ name;
        return greet;
    }
    userMsg=toUser(UserName);
    return userMsg;
}
let msgs=prompt("Please enter your message here");
let UserName=prompt("Enter Username here");
alert("Are you want to continue");
console.log(giveMessage(msgs));