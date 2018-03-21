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

    var e = document.getElementById("modifier").value;

      alert("e = " + e);

    if (e==="add") {
      finalResult = add(number1, number2);
      alert("e = " + e);
    };
    if (e==="subtract") {
      finalResult = subtract(number1, number2);
            alert("e = " + e);
    };
    if (e==="multiply") {
      finalResult = multiply(number1, number2);
            alert("e = " + e);
    };
    if (e==="divide") {
      finalResult = divide(number1, number2);
            alert("e = " + e);
    };

    $("#answer").text(finalResult);

    event.preventDefault();

  });
});
