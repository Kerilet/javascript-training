const age = prompt('What is your age?');
const budget = prompt('What is your salary?');
const price = prompt('What is the price of the house you want to buy?');
const payments = prompt('In how many payments do you wish to pay?');
const paymentPrice = price / payments

if (paymentPrice > budget) {
    alert(`You can't buy this house, insuficient salary`);
} else {
    if (age >= 30 && payments >= 40) {
        alert(`You can't make this purchase, because it will go against the rules of the promotion`);
    } else {
        alert(`Thank you for your purchase! We'll come visit you in ${price / payments}`)
    }
}










