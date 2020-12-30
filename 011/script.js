const matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

const desiredPosition = document.getElementById('position').value;

let info = '';

for (let i = 0; i < matrix.length; i++) {
    info += '<tr>';
    for (let x = 0; x < matrix[i].length; x++) {
        info += `<td>${matrix[i][x]}</td>`;
    }
    info += '</tr>';
}

// eslint-disable-next-line no-unused-vars
function addPosition() {
    matrix.splice(matrix[0][0], 1, `${desiredPosition}`);
    matrix.push(`${desiredPosition}`);
    writeInfo();
    document.getElementById('position').innerHTML = matrix.join('');
    document.getElementById('position').value = '';
}

function writeInfo() {
    matrix.sort();
    document.getElementById('position').innerHTML = matrix.join('');
}

document.getElementById('jojo').innerHTML = info;
console.log(matrix);

/*
//fazer um jogo da velha; usando posições como A1, A2,A3, B1, B2, B3;


const matrix = [];
let info = '';

// eslint-disable-next-line no-unused-vars
function addPosition() {
    const desiredPosition = document.getElementById('position').value;
    matrix.push(`${desiredPosition}`);
    writeInfo();
    document.getElementById('position').innerHTML = matrix.join('');
    document.getElementById('position').value = '';
}

function writeInfo() {
    matrix.sort();
    document.getElementById('position').innerHTML = matrix.join('');
}

for (let i = 0; i < matrix.length; i++) {
    info += '<tr>';
    for (let x = 0; x < matrix[i].length; x++) {
        info += `<td>${matrix[i][x]}</td>`;
        matrix.push(`${info}`);
    }
    info += '</tr>';
}

document.getElementById('ticTacToe').innerHTML = info;



console.log(matrix);

/*
fazer um jogo da velha; usando posições como A1, A2, A3, B1, B2, B3;

Posições possíveis: A1 - A2 - A3 - B1 - B2 - B3 - C1 - C2 - C3

Ideia: como temos turnos, todos os turnos pares serão 'bolinha' (°) e os ímpares serão 'x' (x)
pra isso, faremos uma array vazia que contará os turnos (maximo 9), e, usando mod, determinaremos
o que a máquina irá escrever; Usar splice para substituir os espaços vazios pelos símbolos;

*/