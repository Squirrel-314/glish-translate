var input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("myBtn").click();
   }
});


document.getElementById("myBtn").addEventListener("click", hi);

function hi() {
   document.getElementById("myBtn").style.backgroundColor = "red";
}


if (input === "ASAP" || "asap" ){
   console.log("ASAP stands for: As Soon As Possible");
}
