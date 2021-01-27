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

let codes = [];

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


const writeKonamiCode = () => {
    document.body.innerHTML = '<h1>Konami Code!!!!!!!</h1>';
};


const konamiCheck = (callback /* is a function */ ) => {
    document.addEventListener('keyup', (event) => {
        codes.push(event.key);
        const joined = codes.join('-');
        if (konamiKode.startsWith(joined)) {
            if (konamiKode === joined) {
                callback();
            }
        } else {
            codes = [];
        }
        console.log(event, codes);
    });
};

konamiCheck(writeKonamiCode);
// konamiCheck(showAJojoChar);

//termine o konami code :v