// default params
const buildJojo = (name, father = 'Some Jojo', age = 20, kills = []) => {
    return `${name} is ${age} years old, his father is ${father}, he kills ${kills.length} people`
}

console.log(buildJojo('Joseph Joestar'));

// named params
const buildVillain = ({ name, season, kills, attacks, stand }) => {
    return `${name} from Season ${season} kills ${kills.length} people, he has ${attacks.join(', ')} and his stands is ${stand}`;
}

console.log(buildVillain({
    attacks: ['Stop time'],
    kills: ['Kacoin'],
    season: 3,
    name: 'Dio'
}));

// default params + name params
const buildCharacter = ({ name, season, kills = [], attacks = ['unknown'], stand = 'unknown' }) => {
    return `${name} from Season ${season} kills ${kills.length} people, he has ${attacks.join(',')} and his stands is ${stand}`;
}

console.log(buildCharacter({
    name: 'Diavolo',
    stand: 'King Crimson',
    season: 5,
}));

// Mixed
const buildAny = (name, { season, kills, attacks }) => {
    return buildCharacter({ name, season, kills, attacks });
}

console.log(buildAny('Kira', {
    stand: 'Killer Queen',
    season: 4,
}));



// const getPokemon = () => {
//     return new Promise((resolve, reject) => {
//         // fn
//         // if success
//         resolve(result);
//         // else
//         reject(error);
//     });
// }

const getPokemon = async() => {
    return true;
}


getPokemon()