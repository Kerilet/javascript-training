const infoList = [];

// eslint-disable-next-line no-unused-vars
function addPokemon() {
    const name = document.getElementById('pokeName').value;
    const num = document.getElementById('pokeNumber').value;
    const fancyNum = num.padStart(3, '0');
    if (num > 898 || name == '' || num == '') {
        alert('Please enter valid information!');
    } else {
        infoList.push(`<li class="list-group-item"><div id="allInfo">${fancyNum} - ${name}</div></li>`);
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

// eslint-disable-next-line no-unused-vars
function searchInfo() {
    const input = document.getElementById('search');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('items');
    const li = ul.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        const divFinder = li[i].getElementsByTagName('div')[0];
        const txtValue = divFinder.textContent || divFinder.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}


/*

-------------------------

infoList - alterável
nova array - contém todos os matches da search, será alterada conforme a infoList, não alterável, <= infoList;

*/
