let codes1 = [];

let codes2 = [];

let codes3 = [];

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

const konoDio = [
    'k',
    'o',
    'n',
    'o',
    'd',
    'i',
    'o',
    'd',
    'a',
].join('-');

const writeKonamiCode = () => {
    document.body.innerHTML += '<img src="../img/rickroll.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!">';
    playAudio();
};

const konoDioDa = () => {
    document.body.innerHTML += '<img src="../img/konodioda.gif" alt="You thought this was an alt, but it was I, Dio!" loading="here\'s Dio!">';
    playAudio3();
};

const playAudio = () => {
    const audio = document.getElementById('audio1');
    audio.play();
};

const playAudio2 = () => {
    const audio = document.getElementById('audio2');
    audio.play();
};

const playAudio3 = () => {
    const audio = document.getElementById('audio3');
    audio.play();
};

const rotateScreen = () => {
    var a = '-webkit-',
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
};

const spinScreen = () => {
    var a = '-webkit-',
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
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

const barrelCheck = (callback) => {
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

const konamiCheck = (callback) => {
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

const dioCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
        codes3.push(event.key);
        const joined = codes3.join('-');
        if (konoDio.startsWith(joined)) {
            if (konoDio === joined) {
                callback();
            }
        } else {
            codes3 = [];
        }
        console.log(event, codes3);
    });
};

konamiCheck(writeKonamiCode);
barrelCheck(writeBarrelRoll);
dioCheck(konoDioDa);