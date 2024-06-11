document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let buttonValue = e.target.innerText;

            if (buttonValue === 'AC') {
                expression = "";
                input.value = expression;
            } else if (buttonValue === 'DEL') {
                expression = expression.slice(0, -1);
                input.value = expression;
            } else if (buttonValue === '=') {
                try {
                    expression = eval(expression).toString();
                } catch (error) {
                    expression = "Error";
                }
                input.value = expression;
            } else {
                if (expression === "Error") {
                    expression = "";
                }
                expression += buttonValue;
                input.value = expression;
            }
        });
    });
});
