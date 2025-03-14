const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultBox = document.getElementById("rslt-box");
const resultOutput = document.getElementById("output");

const convertToRoman =  input => {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    let num = "";
    romanNumerals.forEach(numeral => {
        while (input >= numeral[1]) {
            num += numeral[0];
            input -= numeral[1];
        }
    });
    return num;
}

const isValid = input => {
    let inputInt = parseInt(input.value.trim(), 10);
    if (!input.value.trim() || isNaN(inputInt)) {
        resultOutput.innerText = "Please enter a valid number";
    } else if (inputInt < 1) {
        resultOutput.innerText = "Please enter a number greater than or equal to 1";
    } else if (inputInt > 3999) {
        resultOutput.innerText = "Please enter a number less than or equal to 3999";
    } else {
        return inputInt;
    }
    return false;
}

const clearText = () => {
    resultOutput.innerText = "";
}

const resetClasses = () => {
    resultBox.classList.add("error", "hidden");
}

const showResult = input => {    
    const checkedInput = isValid(input);

    if (checkedInput) {
        resultBox.classList.remove("error", "hidden");
        resultOutput.innerText = convertToRoman(checkedInput);
    } else {
        resultBox.classList.remove("hidden");
    }
}

convertBtn.addEventListener("click", () => {
    resetClasses();
    clearText();
    showResult(numberInput);
})

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        resetClasses();
        clearText();
        showResult(numberInput);
    }
})