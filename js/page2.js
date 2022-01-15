//page2.js
$(document).ready(function(){
console.log("Page 2 is working!");
//1) declare variables to hold all your personal information stored in LS
//2) pull personal data from local storage and store into declared variables
let fName = localStorage.getItem("firstName");
let lName = localStorage.getItem("lastName");
let login = localStorage.getItem("loginName");
let studentNo = parseInt(localStorage.getItem("studentNumber")); 
console.log(login); //to check if it works... IT WORKS!

//3) Display personal info in decreasing header tags. Use template literals
$("h1").html(`My name is ${fName} ${lName}`);
$("h2").html(`Student Number : ${studentNo}`);
$("h3").html(`My Sheridan Login name is: ${login}`);

//4) jQuery CSS formatting with atleast 2 formats for each header
$("#name").css({"font-family":"monospace","color":"white"});
$("#studentNum").css({"font-family":"monospace","color":"white"});
$("#loginName").css({"font-family":"monospace", "text-decoration":"underline", "color": "white"});
});