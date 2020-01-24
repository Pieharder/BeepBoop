// User Interface (or front-end) logic:
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    
    var inputNumber = $("input#numberInput").val();
    var adjustedInput = numbersToList(inputNumber)
    
    for (var index = 0; index < adjustedInput.length; index += 1) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + adjustedInput[index] + "</li>");
    };
// Filters non numeric inputs:
    if (isNaN(inputNumber)) {
      alert("Please enter a number")
      $("#result").hide();
    } else
      $("#result").show();
    
  $("#formReset").click(function () {
    $("li").remove();
    });
  });
});
    

// Business (or back-end) logic:
function numbersToList(inputNumber) {

  var inputArray = [];
  for (var index = 0; index <= inputNumber; index += 1) {
    var stringArray = index.toString();
    if (stringArray.includes("3")) {
      inputArray.push("I'm sorry, Dave. I can't do that.");
    } else if (stringArray.includes("2")) {
      inputArray.push("Boop!");
    } else if (stringArray.includes("1")) {
      inputArray.push("Beep!");
    } else {
      inputArray.push(stringArray)
    }
  }
  return inputArray
}