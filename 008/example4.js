function isPositive(num) {
    if (num < 0) {
        return false;
    } else {
        return true;
    }
}

function numQuestion() {
    const num = parseFloat(prompt(`Please enter a number`));
    if (isPositive(num)) {
        document.body.innerHTML += `<br>The number ${num} is positive`;
    } else {
        document.body.innerHTML += `<br>The number ${num} is negative`;
    }
};