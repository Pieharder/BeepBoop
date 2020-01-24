$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#numberInput").val());
   
    console.log(inputNumber)

    for (var currentNumber = 0; currentNumber <= inputNumber; currentNumber += 1) {
      $("#result").append(currentNumber + " ");
     
      console.log(currentNumber)
    
    };
    
    console.log(currentNumber)
  
  });
});