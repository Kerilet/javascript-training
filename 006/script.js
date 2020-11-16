const number = parseInt(prompt('Please, enter a prime number'));
let isPrime = false;
let index = 2;

if (number === 2 || number === 3) {
    isPrime = true
    alert(`Thank you for not being a complete dumbass!`)
} else {
    while (isPrime === false) {
        parseInt(prompt('Please, enter a prime number'));
        index = index + 1;
    }
};



// and here you die
// thank you my master :)