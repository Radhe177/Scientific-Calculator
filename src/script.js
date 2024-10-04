document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    const display = document.getElementById('calc-display');

    const buttons = document.getElementsByClassName('btn');
    let currValue = "";

    function evaluateResult() {
        console.log('currentValue', currValue)
        const convertedValue = currValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("ln", "Math.log")
            .replace("π", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e", Math.E)
            .replace("tan", Math.tan)
            .replace("√", Math.sqrt);
        console.log('convertedValue', convertedValue)
        const result = eval(convertedValue);
        currValue = result.toString();
        display.value = currValue;
    }
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", function () {
            const value = button.innerText;

            try {
                if (value == "AC") {
                    currValue = '';
                    display.value = currValue;
                } else if (value == "=") {
                    evaluateResult();
                }
                else {
                    currValue += value;
                    display.value = currValue;
                }
            } catch (error) {
                console.log(error);
                currValue = "ERROR";
                display.value = currValue;
            }
        }

           
        })
    }
   });