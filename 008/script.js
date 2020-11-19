const decidingFactor = parseInt(prompt(`Would you like an even number list, or an odd number list? (anwser with an odd/even number!)`));

function writeEvenNumbers() {
    let num = parseInt(prompt(`Please enter a number`));

    for (let index = 2; index < num + 1; index = index + 2) {
        document.write(`${index}<br>`)
    }
}

function writeOddNumbers() {
    let num = parseInt(prompt(`Please enter a number`));

    for (let index = 1; index < num + 1; index = index + 2) {
        document.write(`${index}<br>`)
    }
}

if (decidingFactor % 2 === 0) {
    writeEvenNumbers();
} else {
    writeOddNumbers();
}