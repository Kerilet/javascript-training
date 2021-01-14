// const isBastard = true;

// const dio = {};
// dio.fullName = 'Dio Brando';
// dio.age = 122;
// dio.isImmortal = true;
// dio.bastard = isBastard;
// dio.kills = [
//     'Noriaki Kakyoin',
//     'Jonnathan Joestar',
//     'George Joestar',
//     'Dario Brando',
//     'Fishermen',
// ];
// dio.image = './img/dio-brando-19367.jpg';
// dio.order = 1;
// dio.lifeType = 'Vampire';
// dio.description = 'Dio Brando (ディオ・ブランドー Dio Burandō), known as DIO from Part 3 onwards, is the main antagonist of Part 1 and Part 3. After becoming a vampire and later a Stand user, Dio has gathered around him many minions and is responsible for many major events of the series, from the death of Jonathan Joestar to the Joestar Family\'s sudden acquisition of Stand power, and his legacy persists throughout the series.';

// const zaWarudo = {
//     standtype: 'Punch Rush',
//     standRange: 'Close',
//     attacks: [
//         'Muda Muda',
//         'Stop Time',
//     ],
// };

// dio.stand = zaWarudo;

// console.log(dio.stand.attacks.length);

// dio.fleshBud = true;
// delete dio.fleshBud;

// const kars = {
//     isImmortal: true,
//     lifeType: 'Ultimate',
//     age: null,
//     fullName: 'Kars',
//     image: './img/kars.jpg',
//     hoodImage: './img/kars_hooded.png',
//     bastard: isBastard,
//     kills: [
//         'German Soldiers',
//         'Children',
//         'Citizens',
//         'All Pillar Men except Santviento, Wamuu and Esidisi',
//     ],
//     description: 'Kars is the leader of the Pillar Men, and the designer of the Stone Mask. His goal is to evolve further to become immune to the sun\'s rays, and thus he seeks the Red Stone of Aja to empower his Masks, battling the Ripple users for its possession.',
// };

// const esidisi = {
//     isImmortal: false,
//     lifeType: 'Pillar Men',
//     age: null,
//     fullName: 'Esidisi of the Flame',
//     image: './img/esidisi.png',
//     bastard: false,
//     kills: [
//         'Loggins',
//     ],
//     description: 'Esidisi (エシディシ Eshidishi) is an antagonist featured in Battle Tendency.  He is the second highest ranked Pillar Man after Kars and battles the Ripple users for the possession of the Red Stone of Aja.',
// };

// const wamuu = {
//     isImmortal: false,
//     lifeType: 'Pillar Men',
//     age: null,
//     fullName: 'Wamuu',
//     image: './img/whamu.jpg',
//     bastard: false,
//     kills: [
//         'Mario Zeppeli',
//         'German Soldiers',
//         'Mark',
//         'Caesar Anthonio Zeppeli',
//     ],
//     description: 'Wamuu (ワムウ Wamū) is a major antagonist featured in Battle Tendency and a proud Pillar Man warrior in the respectful service of his superiors Esidisi and Kars, also serving as a personal rival to Joseph Joestar throughout his journey.',
// };

// const old = [dio, wamuu, esidisi, kars];

function breakLine(kills) {
    if (kills.length > 0) {
       return kills.join('<br />');
    } 
    return 'None';
}

function checkAge(age) {
    return age ? `${age} years old` : 'Unknown age';
}

function fillCard(ants) {
    let html = '';
    for (let index = 0; index < ants.length; index++) {        
        html += `
            <div class="col-sm cardCol">
                <div class="card" style="width: 18rem;">
                    <img src="${ants[index].image}" class="card-img-top" alt="" class="image">
                    <div class="card-body">
                        <h5 class="card-title">${ants[index].fullName}</h5>
                        <p class="card-text" id="description">${ants[index].description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="Age">${checkAge(ants[index].age)}</li>
                        <li class="list-group-item" id="lifeType">${ants[index].lifeType}</li>
                        <li class="list-group-item" id="Kills"><b>Kills:</b><br />${breakLine(ants[index].kills)}</li>
                    </ul>
                    
                </div>
            </div>    
        `;
    }
    document.getElementById('row').innerHTML = html;
    document.getElementById('counter').innerHTML = `(${ants.length})`;
}

function loadAnts() {
    // ajax
    fetch('011/ants.json')
        .then(function fn(res) {
          res.json()
            .then(function fn(json) {
                fillCard(json);
            });
        });
}

function loadPokemon() {
    // ajax
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(function fn(res) {
          res.json()
            .then(function fn(json) {
                // load here your html constructor
                // fillPokemons
            });
        });
}


loadAnts();
// loadPokemon();


/*

Terminar o .json com o resto dos villões;
Add pasta 012, e lá usar o .json e o PokeAPI (exemplo acima) para mostrar um pokémon;

*/
