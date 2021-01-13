const isBastard = true;

const dio = {};
dio.fullName = 'Dio Brando';
dio.age = 122;
dio.isImmortal = true;
dio.bastard = isBastard;
dio.kills = [
    'Noriaki Kakyoin',
    'Jonnathan Joestar',
    'George Joestar',
    'Dario Brando',
    'Fishermen',
];
dio.image = './img/dio-brando-19367.jpg';
dio.order = 1;
dio.lifeType = 'vampire';
dio.description = 'Dio Brando (ディオ・ブランドー Dio Burandō), known as DIO from Part 3 onwards, is the main antagonist of Part 1 and Part 3. After becoming a vampire and later a Stand user, Dio has gathered around him many minions and is responsible for many major events of the series, from the death of Jonathan Joestar to the Joestar Family\'s sudden acquisition of Stand power, and his legacy persists throughout the series.';

const zaWarudo = {
    standtype: 'Punch Rush',
    standRange: 'Close',
    attacks: [
        'Muda Muda',
        'Stop Time',
    ],
};

dio.stand = zaWarudo;

console.log(dio.stand.attacks.length);

dio.fleshBud = true;
delete dio.fleshBud;

const kars = {
    isImmortal: true,
    lifeType: 'ultimate',
    age: null,
    fullName: '',
    image: './javascript-training/img/kars.jpg',
    hoodImage: './javascript-training/img/kars_hooded.png',
    bastard: isBastard,
    kills: [
        'German Soldiers',
        'Children',
        'Citizens',
        'All Pillar Men except Santviento, Wamuu and Esidisi',
    ],
    descripton: 'Kars is the leader of the Pillar Men, and the designer of the Stone Mask. His goal is to evolve further to become immune to the sun\'s rays, and thus he seeks the Red Stone of Aja to empower his Masks, battling the Ripple users for its possession.',
};

const esidisi = {
    isImmortal: false,
    lifeType: 'pillarMen',
    age: null,
    fullName: 'Esidisi of the Flame',
    image: './javascript-training/img/esidisi.png',
    bastard: false,
    kills: [
        'Loggins',
    ],
    description: 'Esidisi (エシディシ Eshidishi) is an antagonist featured in Battle Tendency.  He is the second highest ranked Pillar Man after Kars and battles the Ripple users for the possession of the Red Stone of Aja.',
};

const wamuu = {
    isImmortal: false,
    lifeType: 'pillarMen',
    age: null,
    fullName: '',
    image: './javascript-training/img/whamu.jpg',
    bastard: false,
    kills: [
        'Mario Zeppeli',
        'German Soldiers',
        'Mark',
        'Caesar Anthonio Zeppeli',
    ],
    description: 'Wamuu (ワムウ Wamū) is a major antagonist featured in Battle Tendency and a proud Pillar Man warrior in the respectful service of his superiors Esidisi and Kars, also serving as a personal rival to Joseph Joestar throughout his journey.',
};

const mainAntagonists = [dio, wamuu, esidisi, kars];

function fillCard(dio) {
    let desc = document.getElementById('description');
    desc = document.getElementById('description').value = `${dio.description}`;
    let image = document.getElementById('dio');
    image = document.getElementById('dio').value = `${dio.image}`;
}

fillCard();

/*

Fazer um card, com os vilões de JoJo's Bizarre Adventure (até a parte 4 pra eu n receber spoiler) com todas as informações de seus respectivos objetos;

we now have PokeAPI, thanks to von Stroheim, because German science is the best in the world;

*/
