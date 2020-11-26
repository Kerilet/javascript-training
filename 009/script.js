function primeQuestion() {
    const num = parseInt(prompt('Please, enter a prime number'));
    let isPrime = true;
    const info = primeCheck(num, isPrime)
}

function primeCheck(num, isPrime) {
    for (let index = num; index >= 1; index--) {
        if (index % 2 === 0 && index > 2 || index % 3 === 0 && index > 3 || index % 5 === 0 && index > 5) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) isPrime = false;
            }
            document.body.innerHTML += `${index} is not prime!<br>`;

        } else {
            document.body.innerHTML += `${index.toString().padStart(3,'0')} is prime!<br>`;
        }
    }
}