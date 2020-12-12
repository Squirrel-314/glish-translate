//var userSearch = document.getElementById("search").value;
// Get the input field
var input = document.getElementById("search");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});



document.getElementById("myBtn").addEventListener("click", run);
document.getElementById("myBtn").addEventListener("click", hi);
function run() {
   let thing;
}

function hi() {
   if (thing = null) {
      document.getElementById("myBtn").innerHTML = "hi";
   }
}










/*
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById('testss').innerHTML = userSearch;
   }
});
















/*
let input = //user search

if (input == "ASAP" || "asap" ){
   alert("ASAP stands for: As Soon As Possible");
}
*/
