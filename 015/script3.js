const infoList = [];

const addInfo = () => {
    const toDos = document.getElementById('toDos').value;
    if (toDos == '') {
        alert('Please enter valid information!');
    } else {
        infoList.push(`<li class="list-group-item"><div id="allInfo">${toDos}</div></li>`);
        writeInfo();
        document.getElementById('toDos').value = '';
    }
}

const deleteInfo = () => {
    if (infoList.length < -1) {
        alert('There is nothing to delete!');
    } else {
        infoList.splice(0, infoList.length);
        writeInfo();
    }
}

const searchInfo = () => {
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

// eslint-disable-next-line no-unused-vars
const deleteSingle = () => {
    const desiredNum = prompt('Which toDo you would you like to delete?');
    for (let index = 0; index < infoList.length; index++) {
        if (infoList[index].indexOf(`${desiredNum}`) > -1) {
            infoList.splice(index, 1);
        }
    }
    writeInfo();
}


const writeInfo = () => {
    infoList.sort();
    document.getElementById('items').innerHTML = infoList.join('');
}

export { addInfo, deleteInfo, searchInfo, deleteSingle, writeInfo }
