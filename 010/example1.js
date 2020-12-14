function createFruits() {
    const fruits = [];
    fruits.push('Apple');
    fruitFair(fruits);
    fruits.push('Grape');
    fruits.push('Watermelon');
    fruitFair(fruits);
}

function fruitFair(fruits) {
    for (let index = 0; index < fruits.length; index++) {
        document.body.innerHTML += `<div>${fruits[index]}</div>`;
    }
}

createFruits();

// Crie uma função que pergunte ao usuário a quantidade de amigos e em seguida, peça o nome de cada e escreva na tela
