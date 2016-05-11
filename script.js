$(document).ready(function() {

    $(".numpad").on("click", function() {
        if (clickedOperator === false) { // If user hasen't selected an operator, it's the first number
            var num = ($(this).text());
            num1.push(num);
            $("#solution").html(num1); // Prints first number to screen
        } else { // They already clicked an operator, therefore it's the second number
            var num = ($(this).text());
            num2.push(num);
            $("#solution").html(num2); // Prints second number to screen
        }
    });
    $(".operator").on("click", function() {
        var oper = ($(this).text());
        clickedOperator = true;
        operand = oper;
    });
    $("#equals").on("click", function() {
        // Combines array of numbers into one
        num1 = num1.join("");
        num1 = parseInt(num1);
        num2 = num2.join("");
        num2 = parseInt(num2);

        switch (operand) {
            case "+":
                var solution = add(num1, num2);
                break;
            case "x":
                var solution = multiply(num1, num2);
                break;
            case "-":
                var solution = subtract(num1, num2);
                break;
            case "/":
                var solution = divide(num1, num2);
                break;
        }
        $("#solution").text(solution); // Prints answer to screen
        num1 = [solution]; // In case the user wants to continue, the previous solution now become the first number
        num2 = [];

    });
    // Clears all variables and readies for next calculation
    $("#clear").on("click", function() {
        num1 = [];
        num2 = [];
        operand = 0;
        clickedOperator = false;
        $("#solution").html("0");
    });

});
var num1 = [];
var num2 = [];
var operand = 0;
var clickedOperator = false;

function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}