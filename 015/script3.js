let infoList = [];
let status = 'ALL';

const addEnter = (ev) => {
    if (ev.key === 'Enter') {
        addInfo(ev.target.value)
    }
}

const addInfo = (targetValue) => {
    const toDos = targetValue;
    if (toDos == '') {
        alert('Please enter valid information!');
    } else {
        infoList.push({
            text: toDos,
            completed: false,
        });
        writeInfo();
        document.getElementById('toDos').value = '';
    }
}

const deleteCompleted = () => {
    infoList = infoList.filter((el) => !el.completed);
    writeInfo();
}

const filterInfo = (newStatus) => {
    status = newStatus;
    writeInfo();
}

const markAll = () => {
    for (let o = 0; o < infoList.length; o++) {
        infoList[o].completed = !infoList[o].completed;
    }
    writeInfo();
}

const deleteSingle = (index) => {
    infoList.splice(index, 1);
    writeInfo();
}

const updateInfo = (indexu, eventuru) => {
    infoList[indexu].text = eventuru.target.value;
}

const toggleState = (indexuru) => {
    infoList[indexuru].completed = !infoList[indexuru].completed;
    writeInfo();
}

const tasksLeft = () => {
    let left = 0;
    for (let a = 0; a < infoList.length; a++) {
        if (!infoList[a].completed) {
            left++;
        }
    }
    return left === 1 ? `${left} item left` : `${left} items left`;
};

const writeInfo = () => {
    const filteredList = [];
    for (let y = 0; y < infoList.length; y++) {
        if (status === 'ACTIVE' && infoList[y].completed === false) {
            filteredList.push(infoList[y]);
        } else if (status === 'COMPLETED' && infoList[y].completed === true) {
            filteredList.push(infoList[y]);
        } else if (status === 'ALL') {
            filteredList.push(infoList[y]);
        }
    }

    document.getElementById('items').innerHTML = '';
    document.getElementById('footer').innerHTML = '';

    for (let i = 0; i < filteredList.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.classList.add('remove-task')
        btn.addEventListener('click', () => deleteSingle(i));

        const noU = document.createElement('input');
        noU.setAttribute('type', 'checkbox');
        noU.checked = filteredList[i].completed;
        noU.classList.add('check-task')
        noU.addEventListener('click', () => toggleState(i));

        const input = document.createElement('input');
        input.value = filteredList[i].text;
        input.classList.add('edit-task')
        input.addEventListener('input', (ev) => updateInfo(i, ev));

        const line = document.createElement('div');
        line.classList.add('task-div')
        line.append(noU);
        line.append(input);
        line.append(btn);

        document.getElementById('items').append(line);
    }

    const markBTN = document.createElement('button');
    markBTN.innerHTML = 'Mark all completed';
    markBTN.classList.add('omni-complete')
    markBTN.addEventListener('click', () => markAll());

    document.getElementById('items').append(markBTN);

    if (infoList.length > 0) {
        const counterDIV = document.createElement('div');
        counterDIV.classList.add('counter-div')
        counterDIV.innerHTML = tasksLeft();

        const filterDIV = document.createElement('div');
        filterDIV.classList.add('filter-div')
        const allBTN = document.createElement('button');
        allBTN.innerHTML = 'All';
        allBTN.classList.add('all-filter')
        allBTN.addEventListener('click', () => filterInfo('ALL'));

        const activeBTN = document.createElement('button');
        activeBTN.innerHTML = 'Active';
        activeBTN.classList.add('active-filter')
        activeBTN.addEventListener('click', () => filterInfo('ACTIVE'));

        const completedBTN = document.createElement('button');
        completedBTN.innerHTML = 'Completed';
        completedBTN.classList.add('completed-filter')
        completedBTN.addEventListener('click', () => filterInfo('COMPLETED'));

        filterDIV.append(allBTN);
        filterDIV.append(activeBTN);
        filterDIV.append(completedBTN);

        const btn2 = document.createElement('button');
        btn2.innerHTML = 'Delete all completed tasks';
        btn2.classList.add('omni-delete')
        btn2.addEventListener('click', () => deleteCompleted());

        const line2 = document.getElementById('footer');
        line2.classList.add('line-div-alt')
        line2.append(counterDIV);
        line2.append(filterDIV);

        let existsCompleted = false;

        for (let x = 0; x < filteredList.length; x++) {
            if (filteredList[x].completed === true) {
                existsCompleted = true;
            }
        }
        if (existsCompleted) {
            line2.append(btn2)
        }
        document.getElementById('items').after(line2);
    }

    // document.getElementById('items').append(JSON.stringify(filteredList));

}
export { addEnter }