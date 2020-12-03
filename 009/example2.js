// eslint-disable-next-line no-unused-vars
function primeQuestion() {
    const total = parseInt(prompt('Please, enter a number'));
    primeCheck(total);
}

function primeCheck(total) {
    for (let index = 1; index <= total; index++) {
        document.body.innerHTML += isPrime(index) ? `${index} is prime! <br>` : `${index} is not prime <br>`;
    }
}

function isPrime(total) {
    if (total === 1) return false;
    for (let index = 2; index < total; index++) {
        if (total % index === 0) {
            return false;
        }
    }
    return true;
}
