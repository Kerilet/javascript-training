/* 001 
function mensagem() {
    var mensagem = 'Eu andei dando uma pesquisada em JavaScript';
}

function num() {
    var num = 1;
}

function num() {
    var num2 = "1";
} 

- - - - - - - - - 

002
function swap() {
    if (document.getElementById('white').style.display === 'none') {
        document.getElementById('white').style.display = 'inline';
        document.getElementById('red').style.display = 'none';
    } else {
        document.getElementById('white').style.display = 'none';
        document.getElementById('red').style.display = 'inline';       
    }
}

function name (){
    var name = 'João';
}

function year (){
    const ano = 2020;
}

function age (){
  let idade = 10;
}

function pokémon (){
    const pokemons = 15; // integer;
}

function stars (){
    const stars = 123e5; // 12300000;
}

function sum (){
    const sum = 23 + 12; // 35;
}

function percentage (){
    const percent = (30 * 23) / 100;
}

function firstName (){
    const firstname = 'Wendel'; // recommended
}

function surName (){
    const surname = "Navarro"; // forget it
}

function fullName (){
    const fullname = `${firstname} de ${surname} da Silva`; // recommended
}

function letter (){
    const letter = 'A';
}

function number (){
    const number = '1';
}

function concat (){
    const concat = '12' + '12'; // 1212
}

function concat2 (){
    const concat2 = '12' + 12;
}

function isActive (){
    const isActive = false;
}

function isMacho (){
   const isMacho = true;
}

function isOld (){
    const isOld = (20.5 > 20);
}

function null (){
    const n = null;
}

function undefined (){
    const und = undefined;
}

function jump (){
    const jump = function () {};
}

function Bulbasaur (){
   const bulbassauro = {
    age: 10,
    weight: 1.4,
}

function jump (){
    const jump = function () {};
}

function math (){
    const math = (((10 + 10) - 200) * 123) / 2;
}

function comp1 (){
    const comp1 = '35' == 35; // true
}

function comp2 (){
    const comp2 = '35' === 35; // false
}

function comp3 (){
    const comp3 = 'Wendel' !== 'Wilbert'; // true
}

function comp4 (){
    const comp4 = 'Wendel' !== firstname; // false
}

- - - - - - - - - 

003
function wendelsAge (){
    const wendelAge = 14;
}

function ageCheck () {
    if (wendelAge > 18) {
    alert('Wendel PODE beber água que passarinho não bebe');
} else {
    alert('Wendell bebeu agua que passrinho não bebe, e agora?');
}
}

function tvPrice (){
    const tvPrice = 5001;
}

function monthlyBudget (){
    const monthlyBudget = 500;
}

function paymentValue (){
    const payments = 10;
}

function paymentPrice (){
    const paymentPrice = tvPrice / payments;
}

function paymentPriceCheck () {
    if (paymentPrice > monthlyBudget) {
    alert(`You can't buy this TV. Payment price: R$${paymentPrice}`)
} else {
    alert('You can do it, man!')
}
}

- - - - - - - - - 

004
function nameCheck () {
    const name = prompt('What´s your name?');
}

function tvPriceCheck () {
    const tvPrice = prompt('What´s TV price?');
}

function budgetCheck () {
    const monthlyBudget = prompt('What´s your budget?');
}

function paymentCheck () {
    const payments = prompt('How many payments?');
}

function priceCheck () {
    const paymentPrice = tvPrice / payments;
}

function possibilityCheck () {
    if (paymentPrice > monthlyBudget) {
    alert(`${name} can't buy this TV. Payment price: R$${paymentPrice}`)
} else {
    alert(`${name}, you can do it, man!`)
}
}

function ageCheck () {
    const age = prompt('What\'s your age?');
}

function jobCheck () {
    const job = confirm('Do you have a job?');
}

function russiaCheck () {
    if (age >= 18 && job === true) {
    alert(`Welcome to Russia, land of the vodkas`);
} else {
    if (age >= 18 && job === false) {
        alert(`Go get a job, then you'll be welcome here`);
    } else {
        alert(`Go back to your capitalist country, you filthy degenerate`)
    }
}
}

function triforceCheck () {
    const triforce = confirm('Do you have the Triforce?');
}

function worthynessCheck () {
    if (triforce === true) {
    const masterSword = confirm('Do you have the Master ~card~ Sword?');
    if (masterSword === true) {
        alert('Then go kill Ganon! What are you waiting for?');
    } else {
        const health = prompt('How many hearts do you have?');
        if (health >= 20) {
            alert('Then go kill Ganon! What are you waiting for?');
        } else {
            alert('You have died. Continue?');
        }
    }
} else {
    alert('You have died. Continue?');
}
}

function ageCheck () {
    const age = prompt('What´s your age?');
}

function budgetCheck () {
    const budget = prompt('What´s your budget?');
}

function priceCheck () {
    const price = parseFloat(prompt('What is the price of the house you want to buy?'));
}

function paymentCheck () {
   const payments = parseFloat(prompt('In how many payments do you wish to pay?'));
}

function yearCheck () {
    const paymentYear = payments / 12;
}

function finalAgeCheck () {
    const finalAge = age + paymentYear
}

function totalPriceCheck () {
    const paymentPrice = price / payments;
}

function maxBudgetCheck () {
    const maxBudget = budget * 0.2;
}

function buildingCheck () {
    if (price >= 100000 && price <= 250000) {
    if (paymentPrice > maxBudget) {
        alert(`You can't buy this house, insuficient salary`);
    } else {
        if (finalAge >= 70) {
            alert(`You can't make this purchase, because it will go against the rules of the promotion`);
        } else {
            alert(`Thank you for your purchase, it will be ${paymentPrice}! We'll come visit you in ${payments} months!`)
        }
    }
} else {
    alert(`Error: Either that building does not exist, or you've inputed the wrong price`);
}
}

function budgetCheck () {
    const budget = prompt('What´s your budget?');
}

- - - - - - - - - 

005
function firstQuestion () {
    const firstQuestion = parseFloat(prompt(`Quais são seus esportes preferidos?

1 - Futebol, automobilismo, esportes radicais
2 - Squash , boliche, voleibol
3 - Aeróbica, spinning
4 - Patinação no Gelo, Ginástica Olímpica
5 - Caça a ursos`));
}

function secondQuestion () {
    const secondQuestion = parseFloat(prompt(`Que comidas você prefere?

1 - Churrasco, Massas, Frituras 
2 - Peixe e salada
3 - Sanduíches integrais
4 - Aves acompanhadas de vegetais cozidos no vapor
5 - Capivara, javali, comida muito apimentada`));
}

function thirdQuestion () {
    const thirdQuestion = parseFloat(prompt(`Na hora do banho, você costuma...

1 - Toma banho rápido, usa xampu e esquece das orelhas ou do pescoço
2 - Toma banho sem pressa mas não exagera
3 - Demora mais de meia hora e usa sabonete líquido
4 - Toma banho com sais e espuma na banheira
5 - Toma banho em 1 minuto, usa sabão em barra`));
}

function fourthQuestion () {
    const fourthQuestion = parseFloat(prompt(`Qual sua relação com o espelho?

1 - Usa para fazer barba
2 - Admira sua pele e observa seus músculos
3 - Idem c, e ainda analisa a bunda
4 - Admira-se com diferentes camisas e penteados
5 - Não usa`));
}

function firstAnwser () {
    const firstAnwser = 20;
}

function secondAnwser () {
    const secondAnwser = 10;
}

function thirdAnwser () {
    const thirdAnwser = 0;
}

function fourthAnwser () {
    const fourthAnwser = -10;
}

function fifthAnwser () {
    const fifthAnswer = 30;
}

function firstAnwserCheck () {
    let firstPoints = null;
if (firstQuestion === 1) {
    firstPoints = firstAnwser;
} else if (firstQuestion === 2) {
    firstPoints = secondAnwser;
} else if (firstQuestion === 3) {
    firstPoints = thirdAnwser;
} else if (firstQuestion === 4) {
    firstPoints = fourthAnwser;
} else {
    firstPoints = fifthAnswer;
}
}

function secondAnwserCheck () {
 let secondPoints = null;
if (secondQuestion === 1) {
    secondPoints = firstAnwser;
} else if (secondQuestion === 2) {
    secondPoints = secondAnwser;
} else if (secondQuestion === 3) {
    secondPoints = thirdAnwser;
} else if (secondQuestion === 4) {
    secondPoints = fourthAnwser;
} else {
    secondPoints = fifthAnswer;
}
}

function thirdAnwserCheck () {
 let thirdPoints = null;
if (thirdQuestion === 1) {
    thirdPoints = firstAnwser;
} else if (thirdQuestion === 2) {
    thirdPoints = secondAnwser;
} else if (thirdQuestion === 3) {
    thirdPoints = thirdAnwser;
} else if (thirdQuestion === 4) {
    thirdPoints = fourthAnwser;
} else {
    thirdPoints = fifthAnswer;
}
}

function fourthAnwserCheck () {
 let fourthPoints = null;
if (fourthQuestion === 1) {
    fourthPoints = firstAnwser;
} else if (fourthQuestion === 2) {
    fourthPoints = secondAnwser;
} else if (fourthQuestion === 3) {
    fourthPoints = thirdAnwser;
} else if (fourthQuestion === 4) {
    fourthPoints = fourthAnwser;
} else {
    fourthPoints = fifthAnswer;
}
}

function totalPoints () {
    const total = firstPoints + secondPoints + thirdPoints + fourthPoints;
}

function averagePoints () {
    const average = total / 4;
}

function finalAnwser () {
    let adv;
    if (average < 0) {
    adv = `Bichona`;
} else if (average >= 0 && average < 10) {
    adv = `Hmmmmmm`;
} else if (average >= 10 && average < 20) {
    adv = `Homem`;
} else if (average >= 20 && average < 30) {
    adv = `Macho`;
} else {
    adv = `Rambo!`;
}
}

function testAnwser () {
    alert(`A média do seu teste foi ${average}, portanto você é ${adv}`);
}

- - - - - - - - - 

006
function moneyCheck () {
    let totalMoney = 0;
while (totalMoney < 500) {
    let number = parseFloat(prompt(`You still need to insert ${500 - totalMoney}`));
    totalMoney = totalMoney + number;
}
}

function suckerAlert () {
     alert(`Thanks for your money, sucker!`)
}

function numberCheck () {
    let number = 1;
while (number % 2 === 1) {
    number = parseInt(prompt(`Please enter an even number below :`));
};
}

function obviousAlert () {
     alert(`Number ${number} is even`);
}

function number () {
     const num = parseInt(prompt('Please, enter a prime number'));
}

function prime () {
     let isPrime = true;
}

function index () {
     let index = 2;
}

function primeCheck () {
     while (isPrime && index < num) {
    if (num % index === 0) isPrime = false;
    index = index + 1;
}
}

function primeCheck2 () {
     if (isPrime) {
    alert(`The number ${num} is prime`);
} else {
    alert(`The number ${num} is not prime`);
}
}

- - - - - - - - - 
007
function number () {
     const num = parseInt(prompt('Please, enter a prime number'));
}

function prime () {
    let isPrime = true;
}

function primeCheck () {
    for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
}
}

function primeReturn () {
    alert(`The number ${num} ${ isPrime ? ' is' : ' is not' } prime`);
}

function priceCheck () {
   const price = parseInt(prompt('What\'s the price?'));
}

function paymentCheck () {
    const payments = parseInt(prompt('How many payments?'));
}

function rateCheck () {
    const rate = parseFloat(prompt('What\'s the interest rate(%) (monthly)?'));
}

function paymentPrice () {
    const paymentPrice = price / payments;
}

function amountCheck () {
    let amount = 0;
}

function lastPayment () {
    let lastPaymentPrice = paymentPrice;
}

function paymentFormula () {
    for (let i = 0; i < payments; i++) {
    lastPaymentPrice = lastPaymentPrice + (lastPaymentPrice * (rate / 100));
    amount = amount + lastPaymentPrice;
}
}

function paymentReturn () {
    document.write(`You wil pay ${amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
}

function lastPayment () {
    let lastPaymentPrice = paymentPrice;
}

function baseNumber () {
    const baseNumber = parseInt(prompt(`Escolha um número para esta tabuada`));
}

function maxNumber () {
    const maxNumber = parseInt(prompt(`Escolha um número menor que 10 para o limite da tabuada`));
}

function resultsNew () {
    if (maxNumber > 10) {
    alert(`Erro: O número máximo que você escolheu é maior que 10. Tente novamente.`);
} else {
    for (let index = 1; index < maxNumber; index++) {
        document.write(`${baseNumber} * ${index} = ${baseNumber * index}<br>`);

    }
}
}

function resultsOld () {
    if (maxNumber > 10) {
    alert(`Erro: O número máximo que você escolheu é maior que 10. Tente novamente.`);
} else if (maxNumber === 10) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>
    ${baseNumber} * 9 = ${baseNumber * 9} <br>
    ${baseNumber} * 10 = ${baseNumber * 10}`);
} else if (maxNumber === 9) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>
    ${baseNumber} * 9 = ${baseNumber * 9} <br>`);
} else if (maxNumber === 8) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>
    ${baseNumber} * 8 = ${baseNumber * 8} <br>`);
} else if (maxNumber === 7) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>
    ${baseNumber} * 7 = ${baseNumber * 7} <br>`);
} else if (maxNumber === 6) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>
    ${baseNumber} * 6 = ${baseNumber * 6} <br>`);
} else if (maxNumber === 5) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>
    ${baseNumber} * 5 = ${baseNumber * 5} <br>`);
} else if (maxNumber === 4) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>
    ${baseNumber} * 4 = ${baseNumber * 4} <br>`);
} else if (maxNumber === 3) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>
    ${baseNumber} * 3 = ${baseNumber * 3} <br>`);
} else if (maxNumber === 2) {
    document.write(`${baseNumber} * 1 = ${baseNumber} <br>
    ${baseNumber} * 2 = ${baseNumber * 2} <br>`);
} else {
    document.write(`${baseNumber} * 1 = ${baseNumber}`);
};
}

function numberOdd () {
    let num = parseInt(prompt(`Please enter a number`));
}

function oddPi () {
    for (let index = num; index >= 1; index--) {
    if (index % 3 === 0) {
        document.write(`pi<br>`);
    } else {
        document.write(`${index.toString().padStart(3,'0')}<br>`);
    }
}
}

function numberEven () {
    let num = parseInt(prompt(`Please enter a number`));
}

function evenPi () {
    for (let index = 2; index < num + 1; index = index + 2) {
    document.write(`${index}<br>`)
}

- - - - - - - - - 

008
function decidingFactor () {
    const decidingFactor = parseInt(prompt(`Would you like an even number list, or an odd number list? (anwser with an odd/even number!)`));
}

function factorDecision () {
if (decidingFactor % 2 === 0) {
    writeEvenNumbers();
} else {
    writeOddNumbers();
}
}

*/