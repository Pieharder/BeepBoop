function numbersToList(numberList) {

  for (var index = 0; index <= numberList.length; index += 1) {
    if (index.includes("3")) {
      numberList[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (index.includes("2")) {
      numberList[index] = "Boop!";
    } else if (index.includes("1")) {
      numberList[index] = "Beep!";
    } else 
      numberList += index
  }
  return numberList.push();

}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
// Gather user input
    var inputNumber = $("input#numberInput").val();
    var numberList = [];
    
    for (var index = 0; index <= inputNumber; index += 1) {
      numberList.push(index);
      console.log(numberList)
    };





    
    for (var currentNumber = 0; currentNumber < numberList.length; currentNumber += 1) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + currentNumber + "</li>");
    };
    console.log(numberList)






// Refuse non number inputs
    if (isNaN(inputNumber)) {
      alert("Please enter a number")
      $("#result").hide();
    } else
      $("#result").show();
    
  });
});