$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
// Gather user input
    var inputNumber = parseInt($("input#numberInput").val());
    var outputNumber = numbersToResult(inputNumber)
// Refuse non number inputs
    if (isNaN(inputNumber)) {
    alert("Please enter a number")
    $("#result").hide();
    } else
    $("#result").show();

    function numbersToResult(number) {
      var numberArray = [];
      for (var index = 0; index <= number; index += 1) {
        numbers.push(index);
      }
      for (var index = 0; index <= number; index += 1) {
        if (index.toString().includes("3")) {
          numbers[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
        } else if (index.toString().includes("2")) {
          numbers[index] = "Boop!";
        } else if (index.toString().includes("1")) {
          numbers[index] = "Beep!";
        }
      }
      return numberArray;
    }
    

    

      for (var currentNumber = 0; currentNumber <= inputNumber; currentNumber += 1) {
        $("#result").prepend("<ul>" + "</ul>").append("<li>" + currentNumber + "</li>");
        console.log(currentNumber)
      };

  });

});