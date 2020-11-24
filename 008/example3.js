function joinNames(count) {
    let names = '';
    for (let i = 0; i < count; i++) {
        const name = prompt(`Name number ${i + 1}`);
        names = names + name + '<br>';
    }
    return names;
}


function writeNames() {
    const count = parseInt(prompt('How many names?'));
    return joinNames(count);
}

document.write(writeNames());