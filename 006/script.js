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

/* function isPrime(num) {
 if (num <= 1) return false;
 if (num=== 2) return true;
 let num2 = Math.sqrt(num);//num2 is the square root of num
 for (let i= 2; i <= num2; i++) { //note that we are working now with the square root
  if (num2 % i === 0) {
  return false;
   }
 }
  return true;
 }
isPrime(521) //is True
isPrime(9801) //is False
isPrime(13037) //is True */