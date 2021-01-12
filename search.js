let input = document.querySelector("#search");
let result = document.getElementById("about");

input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("about").innerHTML = " ";
      search();
   }
});

function search() {
   if (input.value.toUpperCase() == "ASAP") {
      result.innerHTML = "ASAP stands for 'As Soon As Possible'";
   }
   else if (input.value.toUpperCase() == "LOL") {
      result.innerHTML = "LOL stands for 'Laugh out Loud' <br> Rare usage: Lots of Love";
   }
   else if (input.value.toUpperCase() == "WTF") {
      result.innerHTML = "WASH YOUR MOUTH WITH SOAP AND NEVER REPEAT THOSE FOUL WORDS!";
   }
   else {
      result.innerHTML = "Sorry, that term is not in our dictionary yet. Please create an issue on <a href=\"https://github.com/Squirrel-314/glish-translate/issues\"  target=\"_blank\">GitHub</a>";
   }
}
