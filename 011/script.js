const matrix = [
    ['jonnathan joestar', 'baron zepelli', 'dio brando', 'erina pendelton'],
    ['guido mista', 'pannacota fugo', 'narancia ghirga', 'giorno giovanna'],
    ['joseph joestar', 'cars', 'acdc', 'pillarmen'],
    ['jotaro joestar', 'joseph joestar', 'pounaref', 'speedwagon'],
];

let info = '';
for (let i = 0; i < matrix.length; i++) {
    info += '<tr>';
    for (let x = 0; x < matrix[i].length; x++) {
        info += `<td>${matrix[i][x]}</td>`
    }
    info += '</tr>';
}

document.getElementById('jojo').innerHTML = info;

/*
fazer um jogo da velha; usando posições como A1, A2, A3, B1, B2, B3;
*/