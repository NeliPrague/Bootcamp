var x=5;
var y=6;
console.log('tohle je deleni ' + x/y);
console.log(x+y);
console.log(x%y);
console.log(x+=y);
console.log(x);

// string length

var text = "knihovna";
console.log(text.length);
var text2 = "text";
console.log(text2[1]);


//string method
var idNumber = "921122/2328";
console.log(idNumber.indexOf("/"));
console.log(idNumber.indexOf("5"));
var text3 = "text";
var searchString = "e";
console.log(text3.indexOf(searchString));
var indexNumber = idNumber.indexOf("/")
console.log(idNumber.slice(indexNumber+1));
console.log(idNumber.substring(0,indexNumber));
console.log(idNumber.substring(0,idNumber.length));

//arrays
var band = ["Abba", "Jimmy", "MamaMia"];
console.log(band[2]);
console.log(band.length);
