const num = parseInt(prompt('Please, enter a prime number'));
let isPrime = true;


for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
}

alert(`The number ${num} ${ isPrime ? ' is' : ' is not' } prime`);