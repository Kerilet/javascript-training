const age = parseFloat(prompt('What is your age?'));
const budget = parseFloat(prompt('What is your salary?'));
const price = parseFloat(prompt('What is the price of the house you want to buy?'));
const payments = parseFloat(prompt('In how many payments do you wish to pay?'));
const paymentYear = payments / 12;
const finalAge = age + paymentYear
const paymentPrice = price / payments;
const maxBudget = budget * 0.2;

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











