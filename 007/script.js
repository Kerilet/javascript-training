const baseNumber = parseInt(prompt(`Escolha um número para esta tabuada`));
const maxNumber = parseInt(prompt(`Escolha um número menor que 10 para o limite da tabuada`));

if (maxNumber > 10) {
    alert(`Erro: O número máximo que você escolheu é maior que 10. Tente novamente.`);
} else if (maxNumber === 10) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>
    ${baseNumber} * 9 = ${baseNumber * 9} <br>
    ${baseNumber} * 10 = ${baseNumber * 10}`);
} else if (maxNumber === 9) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>
    ${baseNumber} * 9 = ${baseNumber * 9} <br>`);
} else if (maxNumber === 8) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>`);
} else if (maxNumber === 7) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>`);
} else if (maxNumber === 6) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>`);
} else if (maxNumber === 5) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>`);
} else if (maxNumber === 4) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>`);
} else if (maxNumber === 3) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>`);
} else if (maxNumber === 2) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>`);
} else {
    document.write(`${baseNumber} * 1 = ${baseNumber}`);
};