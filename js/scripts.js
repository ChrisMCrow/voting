

$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#voter").show();
  } else if (age === 18){
    $("#voter").show();
    alert("You are old enough to vote! Register immediately!")
  } else {
    $("#underage").show();
  }

});
