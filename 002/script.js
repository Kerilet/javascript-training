// deprecated
var name = 'João';

// ;)
const ano = 2020;
let idade = 10;

// Variables types

// Numbers
const pokemons = 15; // integer
const price = 29.999999; // float
const stars = 123e5; // 12300000
const sum = 23 + 12; // 35
const percent = (30 * 23) / 100;

// Strings
const firstname = 'Wendel'; // recommended
const surname = "Navarro"; // forget it
const fullname = `${firstname} de ${surname} da Silva`; // recommended
const letter = 'A';
const number = '1';
const concat = '12' + '12'; // 1212
const concat2 = '12' + 12;

// Booleans
const isActive = false;
const isMacho = true;
const isOld = (20.5 > 20);

// Null / Undefined
const n = null;
const und = undefined;

// Functions
const jump = function () {};

// Object
const bulbassauro = {
    age: 10,
    weight: 1.4,
};

// Operators
// basic 
const math = (((10 + 10) - 200) * 123) / 2;

// comparators
// >  <  >=  <=  ==  ===  !=  !==
const comp1 = '35' == 35; // true
const comp2 = '35' === 35; // false
const comp3 = 'Wendel' !== 'Wilbert'; // true
const comp4 = 'Wendel' !== firstname; // false

alert(comp2);