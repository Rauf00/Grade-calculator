//demonstarting call functiom in JS
var inter = setInterval(sayHello, 0);

function sayHello(){
  console.log("Hello");
}

console.log("world");

//demonstarting serialization of JSON objects

var clientObject = {name:"Rauf Shimarov", age: 19};
var userStr = JSON.stringfy(userObj);

//send to server

var serverObj = JSON.parse(userStr);
serverObject["name"]; // Rauf Shimarov




// document.getElementById("button1").addEventListner('click', function(){
//   document.getElementById("para").innerHTML = "First paragraph";
//   console.log("you've clicked me");
// });

//document.
