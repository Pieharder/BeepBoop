$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#numberInput").val());
    console.log(inputNumber)
    var total = 1
    for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
      total += currentNumber;
      console.log(currentNumber)
    };
    console.log(currentNumber)
    console.log(total)
  });
});