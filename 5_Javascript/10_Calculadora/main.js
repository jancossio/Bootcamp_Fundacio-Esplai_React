const screenValue = document.getElementById("screen");
const operations = document.querySelectorAll(".operations");
const numbers = document.querySelectorAll(".numbers");
const theme = document.getElementById("theme-selector");
const equalBtn = document.querySelector(".equal");
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector(".delete");

// Theme handling
const themes = {
    0: {
        '--first-color': 'rgb(66, 66, 105)',
        '--second-color': 'rgb(0, 0, 54)',
        '--third-color': 'rgb(29, 29, 85)',
        '--fourth-color': 'white',
        '--fifth-color': 'rgb(43, 135, 196)',
        '--sixth-color': 'red'
    },
    1: {
        '--first-color': 'white',
        '--second-color': 'rgb(220, 220, 220)',
        '--third-color': 'grey',
        '--fourth-color': 'black',
        '--fifth-color': 'orange',
        '--sixth-color': 'rgb(150, 150, 150)'
    },
    2: {
        '--first-color': 'navy',
        '--second-color': 'rgb(5, 139, 0)',
        '--third-color': 'rgb(74, 74, 190)',
        '--fourth-color': 'white',
        '--fifth-color': 'rgb(255, 119, 232)',
        '--sixth-color': 'rgb(0, 132, 255)'
    }
};

let currentValue = '';
let previousValue = '';
let operation = null;
let controlOperation = false;

//Updates calculator's screen content
function updateScreen(value) {
    if(value === ''){
        screenValue.innerHTML = '0';
    }else{
        screenValue.innerHTML = value;
    }
}

//Handles number button clicks
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (operation === null){
            currentValue += button.textContent;
            updateScreen(currentValue);
        }else{
            previousValue += button.textContent;
            updateScreen(previousValue);
            controlOperation = true; //Control bool
        }
    });
});

//Handles operations (+, -, /, X)
operations.forEach(button => {
    button.addEventListener('click', () => {
        if (currentValue !== ''){
            if(operation !== null && previousValue !== '' && controlOperation){
                calculate();
            }
            operation = button.textContent;
            previousValue='';
        }
    });
});

// Function to perform the calculation
function calculate() {
    let result;
    const previous = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operation) {
        case '+':
            result = current + previous;
            break;
        case '-':
            result = current - previous;
            break;
        case '/':
            result = current / previous;
            break;
        case 'X':
            result = current * previous;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    updateScreen(currentValue);
    //previousValue='';
}

// Handle equal button (=)
equalBtn.addEventListener('click', () => {
    if (operation !== null && currentValue !== ''){
        calculate();
        controlOperation = false; //Control bool
    }
});

// Handle reset button (RESET)
resetBtn.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    operation = null;
    updateScreen(currentValue);
});

// Handle delete button (DEL)
deleteBtn.addEventListener('click', () => {
    currentValue = currentValue.slice(0, -1);
    updateScreen(currentValue);
});

theme.addEventListener("input", function() {
    const selectedTheme = themes[theme.value];
    Object.keys(selectedTheme).forEach(variable => {
        document.documentElement.style.setProperty(variable, selectedTheme[variable]);
    });
});