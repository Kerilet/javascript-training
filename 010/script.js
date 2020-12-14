function nameCheck() {
    const nameQuantity = parseInt(prompt('How many names do you want to write down?'));
    nameWriting(nameQuantity);
}

function nameWriting(nameQuantity) {
    const namelist = [];
    for (let index = 0; index < nameQuantity; index++) {
        if (index < nameQuantity) {
            const name = prompt('Please enter a name');
            namelist.push(`${name}<br>`);
        }
        document.body.innerHTML += `${namelist}`;

    }
}

nameCheck();

// Crie uma função que pergunte ao usuário a quantidade de amigos e em seguida, peça o nome de cada e escreva na tela
