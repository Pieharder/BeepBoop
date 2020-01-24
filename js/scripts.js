$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#numberInput").val());
   
    console.log(inputNumber)
    
    
  if (isNaN(inputNumber)) {
    alert("Please enter a number")
} else
    $("#result").show();


    for (var currentNumber = 0; currentNumber <= inputNumber; currentNumber += 1) {
      $("#result").append(currentNumber + " ");
     
      console.log(currentNumber)
    };
    
    
    for (var index = 0; index < currentNumber.length; index += 1) {
      if (currentNumber[index] === 1 || currentNumber[index] === 2 || currentNumber[index] === 3) {
        currentNumber.splice(index, 1, "-");
      };
    };
      console.log(currentNumber)
    
  });
});