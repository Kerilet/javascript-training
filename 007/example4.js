let num = parseInt(prompt('Please enter a number'));

for (let index = num; index >= 1; index--) {
    if (index % 3 === 0) {
        document.write('pi<br>');
    } else {
        document.write(`${index.toString().padStart(3,'0')}<br>`);
    }
}