



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
// Gather user input
    var inputNumber = $("input#numberInput").val();

  });
});
    


function numbersToList(inputNumber) {
  var finalList
  for (var index = 0; index <= inputNumber; index += 1) {
    if(containsNumber(index, "3")) {
      numberList += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if(containsNumber(index, "2")) {
      numberList += "Boop!";
    } else if(containsNumber(index, "1")) {
      numberList += "Beep!";
    } else {
      numberList += index;
    }
    if(i !== input) {
      numList += ",";
  }
}
    

    for (var index = 0; index < newList.length; index += 1) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + index + "</li>");
    };
    console.log(numberList)






// Refuse non number inputs
    if (isNaN(inputNumber)) {
      alert("Please enter a number")
      $("#result").hide();
    } else
      $("#result").show();
    }
