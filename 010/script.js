const infoList = [];

// eslint-disable-next-line no-unused-vars
function addPokemon() {
    const name = document.getElementById('pokeName').value;
    const num = document.getElementById('pokeNumber').value;
    const fancyNum = num.padStart(3, '0');
    if (num > 898 || name == '' || num == '') {
        alert('Please enter valid information!');
    } else {
        infoList.push(`<div id="name"><li class="list-group-item">${fancyNum} - ${name}</li></div>`);
        writeInfo();
        document.getElementById('pokeNumber').value = '';
        document.getElementById('pokeName').value = '';
    }
}

function writeInfo() {
    infoList.sort();
    document.getElementById('items').innerHTML = infoList.join('');
}

// eslint-disable-next-line no-unused-vars
function deleteInfo() {
    if (infoList.length < -1) {
        alert('There is nothing to delete!');
    } else {
        infoList.splice(0, infoList.length);
        writeInfo();
    }
}

// eslint-disable-next-line no-unused-vars
function deleteNumber() {
    const desiredNum = prompt('Which number you would you like to delete?');
    const fancyDesiredNum = desiredNum.padStart(3, '0');
    for (let index = 0; index < infoList.length; index++) {
        if (infoList[index].indexOf(`${fancyDesiredNum}`) > -1) {
            infoList.splice(index, 1);
        }
    }
    writeInfo();
}

/*
Fazer um search, que vá buscando o mais proximo do que foi digitado no "search";
dica: filter;
-------------------------

infoList - alterável
nova array - contém todos os matches da search, será alterada conforme a infoList, não alterável, <= infoList;

*/
