let b=document.body;
console.log("First child of body is "+b.firstChild);
console.log("First element child of body is "+b.firstElementChild);//There we only get element node

//Table based Navigation

let t= document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);  // we get all rows in this table
console.log(t.column);
console.log(t.tHead);//to print tHead
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.rows[0].rowIndex);
console.log(t.rows[1].sectionRowIndex);
console.log(t.rows[2].cells)
