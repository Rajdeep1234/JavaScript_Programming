let marks={
    Rajdeep:70,
    Prativa:80,
    Priya:85,
    Chandan:95,
    Dipak:65
}
//Object.keys(marks) --Create an Array
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)); //Array
    console.log(Object.keys(marks)[i]) /// Keys
    console.log(marks[Object.keys(marks)[i]]); ///Corosponding value
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}