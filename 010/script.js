const namelist = [];

function deleteName(index) {
    namelist.splice(index, 1);
    writeNames();
}

function deleteAllNames() {
    namelist.splice(0, namelist.length);
    writeNames();
}

function addName() {
    const name = document.getElementById('inputText').value;
    namelist.push(`<li class="list-group-item">${name}</li>`);
    writeNames();
    document.getElementById('inputText').value = '';
}

function writeNames() {
    document.getElementById('items').innerHTML = namelist.join('');
}


// nameCheck();

// escreva cada um deles na forma de botão