let matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let turn = 0;



// eslint-disable-next-line no-unused-vars
function addPosition() {
    const desiredPosition = document.getElementById('position').value;
    const rowLetter = desiredPosition[0];
    const columnNumber = parseInt(desiredPosition[1] - 1);
    const rowLabel = ['A', 'B', 'C'];
    const rowNumber = rowLabel.indexOf(rowLetter.toUpperCase());
    if (rowNumber >= 0 && rowNumber < 3 && columnNumber >= 0 && columnNumber < 3) {
        const currentTurn = turn % 2 === 0 ? 'O' : 'X';
        if (matrix[rowNumber][columnNumber] === '') {
            matrix[rowNumber][columnNumber] = currentTurn;
            writeInfo();
            turn = turn + 1;
            document.getElementById('position').value = '';
            checkWinner(currentTurn);
        } else {
            alert('You can not input your movement on a occupied cell you stupid degenerate that should not have existed, stop wasting our oxygen you oxymoron');
        }
    } else {
        alert('Please enter valid information you stupid degenerate that should not have existed, stop wasting our oxygen you oxymoron');
    }

    document.getElementById('position').value = '';
}

function writeInfo() {
    let info = '';

    for (let i = 0; i < matrix.length; i++) {
        info += '<tr>';
        for (let x = 0; x < matrix[i].length; x++) {
            info += `<td>${matrix[i][x]}</td>`;
        }
        info += '</tr>';
    }
    document.getElementById('checkers').innerHTML = info;
    checkWinner();
}

function checkDraw() {
    for (let z = 0; z < matrix.length; z++) {
        for (let c = 0; c < matrix[z].length; c++) {
            if (matrix[z][c] === '') {
                return false;
            }
        }
    }
    return true;
}

function checkWinner() {
    const winner = checkRows() || checkColumns() || checkDiagonals();
    if (winner) {
        alert(`${winner.toUpperCase()} wins!`);
        resetBoard();
    }
    if (checkDraw() && !winner) {
        alert('No winners, it\'s a draw!');
        resetBoard();
    }

}

function checkRows() {
    for (let x = 0; x < matrix.length; x++) {
        const text = matrix[x].join('');
        if (text === 'XXX') {
            return 'X';
        }
        if (text === 'OOO') {
            return 'O';
        }
    }
    return null;
}

function checkColumns() {
    let column1 = '';
    let column2 = '';
    let column3 = '';
    for (let y = 0; y < matrix.length; y++) {
        column1 += matrix[y][0];
        column2 += matrix[y][1];
        column3 += matrix[y][2];
    }
    if (column1 === 'XXX' || column2 === 'XXX' || column3 === 'XXX') {
        return 'X';
    }
    if (column1 === 'OOO' || column2 === 'OOO' || column3 === 'OOO') {
        return 'O';
    }
    return null;
}

function checkDiagonals() {
    if (matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X') {
        return 'X';
    }
    if (matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O') {
        return 'O';
    }
    if (matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === 'X') {
        return 'X';
    }
    if (matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === 'O') {
        return 'O';
    }
    return null;
}

writeInfo();

function resetBoard() {
    matrix = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    document.getElementById('boardGame').value = '';
    writeInfo();
}


/*
Liçon di KSa : comprar tompero; adicionar o botão reset; no final mostrar o resultado;

---------------

linha tiver 3 simbolos identicos = esse simbolo eh o vencedor
coluna tiver 3 simbolos identicos = esse simbolo eh o vencedor



*/
