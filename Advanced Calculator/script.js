let string = ``;
let buttons = document.querySelectorAll(`button`);

Array.from(buttons).forEach((button) => {
    button.addEventListener(`click`, (e) => {
        // Handle the = button click to evaluate the expression
        if (e.target.innerHTML == `=`) {
            try {
                string = eval(string);
                document.querySelector(`input`).value = string;
            } catch (error) {
                document.querySelector(`input`).value = "Error";
                string = ``;
            }
        } 
        // Handle the C button click to clear the input
        else if (e.target.innerHTML == `C`) {
            string = ``;
            document.querySelector(`input`).value = string;
        }
        // Handle Sin button to calculate sine of the current input (in radians)
        else if (e.target.innerHTML == `Sin`) {
            string = `Math.sin(${string})`;
            document.querySelector(`input`).value = string;
        }
        // Handle Cos button to calculate cosine of the current input (in radians)
        else if (e.target.innerHTML == `Cos`) {
            string = `Math.cos(${string})`;
            document.querySelector(`input`).value = string;
        }
        // Handle the input of numbers and operators
        else {
            string = string + e.target.innerHTML;
            document.querySelector(`input`).value = string;
        }
    });
});
