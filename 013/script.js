// Tradicional :(
function myFn1() {
    console.log('I am myFn1');
}

// Tradicional 2 :(
const myFn2 = function fn() {
    console.log('I am myFn2');
};

// Moderna!!! :)
const myFn3 = (number) => {
    return number * 10;
};

// Moderna e concisa
const myFn4 = number => number * 10;

myFn1();
myFn2();
console.log(myFn3(123));
console.log(myFn4(456));

/*
funcoes de callback
 eventos sem previsao de acontecimento (ex: garcon retornando comida)
 sempre recebe uma funcao como parametro, e sempre executa uma funcao ao "ativar"
*/

let codes1 = [];


let codes2 = [];

const konamiKode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
].join('-');

const barrelRoll = [
    'd',
    'o',
    'a',
    'b',
    'a',
    'r',
    'r',
    'e',
    'l',
    'r',
    'o',
    'l',
    'l',
].join('-');

const writeKonamiCode = () => {
    document.body.innerHTML += '<img src="../img/rickroll.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!">';
};

const barrelCheck = (callback /* is a function */ ) => {
    document.addEventListener('keyup', (event) => {
        codes2.push(event.key);
        const joined = codes2.join('-');
        if (barrelRoll.startsWith(joined)) {
            if (barrelRoll === joined) {
                callback();
            }
        } else {
            codes2 = [];
        }
        console.log(event, codes2);
    });
};

const konamiCheck = (callback /* is a function */ ) => {
    document.addEventListener('keyup', (event) => {
        codes1.push(event.key);
        const joined = codes1.join('-');
        if (konamiKode.startsWith(joined)) {
            if (konamiKode === joined) {
                callback();
            }
        } else {
            codes1 = [];
        }
        console.log(event, codes1);
    });
};

konamiCheck(writeKonamiCode);
barrelCheck(writeKonamiCode);
// konamiCheck(showAJojoChar);

// faça o barrel roll
