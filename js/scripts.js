$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
// Gather user input
    var inputNumber = $("input#numberInput").val();
    var adjustedInput = numbersToList(inputNumber)
    
    for (var index = 0; index <= adjustedInput.length; index += 1) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + adjustedInput + "</li>");
    };
    
    // Refuse non number inputs
    if (isNaN(inputNumber)) {
      alert("Please enter a number")
      $("#result").hide();
    } else
      $("#result").show();
    
    $("#formReset").click(function () {
      $("#result").hide();
    });
  });
});
    


function numbersToList(inputNumber) {

  var inputArray = [];
  for (var index = 0; index <= inputNumber; index += 1) {
    var incrString = index.toString();
    if (incrString.includes("3")) {
      inputArray.push("I'm sorry, Dave. I can't do that.");
    } else if (incrString.includes("2")) {
      inputArray.push("Boop!");
    } else if (incrString.includes("1")) {
      inputArray.push("Beep!");
    } else {
      inputArray.push(incrString)
    }
  }
  return inputArray
}