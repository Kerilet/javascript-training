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
    playAudio();
};

const playAudio = () => {
    const audio = document.getElementById('audio1');
    audio.play();
};

const playAudio2 = () => {
    const audio = document.getElementById('audio2');
    audio.play();
};

const rotateScreen = () => {
    var a = '-webkit-',
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
};

const spinScreen = () => {
    var a = '-webkit-', // vendor prefix for Chrome, Safari
        b = 'transform:rotate(1turn);', // the CSS for rotating 360deg
        c = 'transition:4s;'; // the CSS for making the rotation last 4 seconds

    document.head.innerHTML // adding a style tag to the <head>
        += '<style>body{' + a + b + a + c + b + c; // the combined CSS in the style tag

    /*
    This actually generates a string that looks like:
    "<style>body{-webkit-transform:rotate(1turn);-webkit-transition:4s;transform:rotate(1turn);transition(4s);"
    Which obviously is lacking a closing tag and a closing bracket, but luckily browsers are smart enough to figure this out.
    It also only has vendor prefixes for WebKit. That's because it turns out Firefox and Opera work just fine without the prefixes here.
    */
};

const writeBarrelRoll = () => {
    document.body.innerHTML += ` <script>
    var doABarrelRoll = function() {
        var a = "-webkit-",
            b = 'transform:rotate(1turn);',
            c = 'transition:4s;';
        document.head.innerHTML += '<style>body{' + a + b + a + c + b + c
    }

    doABarrelRoll();
</script>`;
    rotateScreen();
    spinScreen();
    playAudio2();
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
barrelCheck(writeBarrelRoll);
// konamiCheck(showAJojoChar);

// faça o barrel roll
/*
        <script>
            var doABarrelRoll = function() {
                var a = "-webkit-",
                    b = 'transform:rotate(1turn);',
                    c = 'transition:4s;';
                document.head.innerHTML += '<style>body{' + a + b + a + c + b + c
            }

            doABarrelRoll();
        </script>
*/
