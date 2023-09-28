document.addEventListener("DOMContentLoaded", function() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("operator");
    const calculateButton = document.getElementById("calculate");
    const resultText = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorSelect.value;
        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operator";
                break;
        }

        resultText.textContent = "Result: " + result;
    });
});
