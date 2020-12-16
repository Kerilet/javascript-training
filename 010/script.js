/*


function deleteName(index) {
    namelist.splice(index, 1);
    writeNames();
}

function numberDeletion() {
    namelist.splice(0, namelist.length);
    writeNames();
}

function addName() {
    const name = document.getElementById('inputText').value;
    namelist.push(`<li class="list-group-item">${name}</li>`);
    writeNames();
    document.getElementById('inputText').value = '';
}




nameCheck();

escreva cada um deles na forma de botão
*/

const infoList = [];

function addNumber() {
    const num = document.getElementById('inputText').value;
    infoList.push(`<div id="number"><li class="list-group-item">${num}</li></div>`);
    writeInfo();
    document.getElementById('inputText').value = '';
}

function addName() {
    const name = document.getElementById('inputText').value;
    infoList.push(`<div id="name"><li class="list-group-item">${name}</li></div>`);
    writeInfo();
    document.getElementById('inputText').value = '';
}

function writeInfo() {
    document.getElementById('items').innerHTML = infoList.join('');
}

/* ideia = escrever uma "li" dentro de uma "div" com IDs depedentes de sua classe ("id = number" pra numeros e "id = name" pra nomes),
 dessa forma podemos deletar as divs baseadas em seus IDs enquanto fazemos a função "delete all items" deletar todas as divs
*/