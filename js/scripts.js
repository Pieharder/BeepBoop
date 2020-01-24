function numbersToList(inputNumber) {
  var numberList = [];
  for (var index = 0; index <= inputNumber; index += 1) {
    numberList.push(index);
  }
  for (var index = 0; index <= inputNumber; index += 1) {
    if (index.toString().includes("3")) {
      numberList[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (index.toString().includes("2")) {
      numberList[index] = "Boop!";
    } else if (index.toString().includes("1")) {
      numberList[index] = "Beep!";
    }
  }
  return numberList;
}

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
// Gather user input
    var inputNumber = parseInt($("input#numberInput").val());
    var outputNumber = numbersToList(numberList)
    

    for (var currentNumber = 0; currentNumber <= numberList.length; currentNumber += 1) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + numberList + "</li>");
      console.log(currentNumber)
    };
    






// Refuse non number inputs
    if (isNaN(inputNumber)) {
      alert("Please enter a number")
      $("#result").hide();
    } else
      $("#result").show();
  });

});