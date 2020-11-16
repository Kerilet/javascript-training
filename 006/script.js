const num = parseInt(prompt('Please, enter a prime number'));
let isPrime = true;
let index = 2;

while (isPrime && index < num) {
    if (num % index === 0) isPrime = false;
    index = index + 1;
}

if (isPrime) {
    alert(`The number ${num} is prime`);
} else {
    alert(`The number ${num} is not prime`);
}