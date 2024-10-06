const display = document.getElementById("display");

const appendToDisplay = (value) => {
    display.value += value;
};

const clearDisplay = () => {
    display.value = '';
};

const calculateResult = () => {
    try {
        display.value = new Function(`return ${display.value}`)();
    } catch (error) {
        display.value = "Error";
    }
};
