let input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      search();
   }
});


function search() {
   if (input.value == "ASAP"){
      document.getElementById("about").innerHTML = "ASAP stands for 'As Soon As Possible'";
   }
   if (input.value == null) {
      document.getElementById("about").innerHTML = "No input found.";
   }
   else {
      document.getElementById("about").innerHTML = input.value;
   }
}
