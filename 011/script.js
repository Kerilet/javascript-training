const matrix = [
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
        } else {
            alert('You can not input your movement on a occupied cell you stupid degenerate that should not have existed, stop wasting our oxygen you oxymoron');
        }
    } else {
        alert('Please enter valid information you stupid degenerate that should not have existed, stop wasting our oxygen you oxymoron');
    }
    checkWinner();
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

    document.getElementById('jojo').innerHTML = info;
}

function checkWinner() {

}

writeInfo();

/*
Liçon di KSa : comprar tompero; adicionar o botão reset; no final mostrar o resultado;

---------------

linha tiver 3 simbolos identicos = esse simbolo eh o vencedor
coluna tiver 3 simbolos identicos = esse simbolo eh o vencedor



*/
