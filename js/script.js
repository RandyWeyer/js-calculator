$(document).ready(function() {

  $("#calculator").submit(function(event) {

    var number1 = parseInt($("input#first-number").val());
    var number2 = parseInt($("input#second-number").val());

    var add = function(number1, number2) {
      return number1 + number2;
    };

    var subtract = function(number1, number2) {
      return number1 - number2;
    };

    var multiply = function (number1,number2) {
      return number1 * number2;
    };

    var divide = function (number1,number2) {
      return number1 / number2;
    };
    alert("After declare var");

    var e = document.getElementById("modifier").value;


    alert("After get modifier");

    if (e="add") {
      var finalResult = add(number1, number2);
    }
    if (e="subtract") {
      var finalResult = subtract(number1, number2);
    }
    if (e="multiply") {
      var finalResult = multiply(number1, number2);
    }
    if (e="divide") {
      var finalResult = divide(number1, number2);
    }

    alert("After calculate");

    $("#answer").text(finalResult);

    alert("After display answer");


    event.preventDefault();

    alert("After everything");
  });
});
