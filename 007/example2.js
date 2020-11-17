const price = parseInt(prompt('What\'s the price?'));
const payments = parseInt(prompt('How many payments?'));
const rate = parseFloat(prompt('What\'s the interest rate(%) (monthly)?'));
const paymentPrice = price / payments;

let amount = 0;
let lastPaymentPrice = paymentPrice;


for (let i = 0; i < payments; i++) {
    lastPaymentPrice = lastPaymentPrice + (lastPaymentPrice * (rate / 100));
    amount = amount + lastPaymentPrice;
}


document.write(`You wil pay ${amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);