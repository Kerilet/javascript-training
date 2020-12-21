const infoList = [];



// eslint-disable-next-line no-unused-vars
function addPokemon() {
    const name = document.getElementById('pokeName').value;
    const num = document.getElementById('pokeNumber').value;
    const fancyNum = num.padStart(3, '0');
    infoList.push(`<div id="name"><li class="list-group-item">${fancyNum} - ${name}</li></div>`);
    writeInfo();
    document.getElementById('pokeNumber').value = '';
    document.getElementById('pokeName').value = '';
}

function writeInfo() {
    document.getElementById('items').innerHTML = infoList.join('');
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

1º Forma - Variável

antes do "for" = "let"
durante o "for" = mudar o valor do "let" se o "splice" ocorreu
depois do "for" = verificar o valor do "let", se mudou = nada

2º Forma - Length Check

antes do "for" = infoList.length
depois do "for" = se o "infoList.length" for menor do que antes = nada; se continuar do mesmo tamanho = alert

------------

Organizar a lista por ordem alfabética; Proibir campos vazios; Limitar os campos para aceitar apenas Pokémon existentes; Fazer com que o "delete all items" realmente funcione;
FUTURO: Implementar um search e colorir a div correspondente ao seach; limitar o search pra Pokémon já existentes na lista; Fazer o search aceitar tanto números quanto números;

*/
