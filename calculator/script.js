let display = document.getElementById('display');
        let buttons = document.querySelectorAll('button');
        let currentInput = '';
        let operator = '';
        let firstValue = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                let value = button.textContent;

                // Handle clear button
                if (value === 'C') {
                    currentInput = '';
                    operator = '';
                    firstValue = '';
                    display.textContent = '0';
                    return;
                }

                // Handle equals button
                if (value === '=') {
                    if (firstValue && operator && currentInput) {
                        currentInput = eval(firstValue + operator + currentInput);
                        display.textContent = currentInput;
                        firstValue = '';
                        operator = '';
                    }
                    return;
                }

                // Handle operators
                if (['+', '-', '*', '/'].includes(value)) {
                    if (!firstValue) {
                        firstValue = currentInput;
                        currentInput = '';
                    }
                    operator = value;
                    return;
                }

                // Handle numbers
                currentInput += value;
                display.textContent = currentInput;
            });
        });