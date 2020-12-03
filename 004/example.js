const name = prompt('What´s your name?');

// Exercises
const tvPrice = prompt('What´s TV price?');
const monthlyBudget = prompt('What´s your budget?');
const payments = prompt('How many payments?');

// Mostrar um alert para usuário informando se o valor da parcela é superior ao orçamento mensal. As opções são:
// - You can't buy this TV. Payment price: R$ .....
// - You can do it, man!

const paymentPrice = tvPrice / payments;

if (paymentPrice > monthlyBudget) {
    alert(`${name} can't buy this TV. Payment price: R$${paymentPrice}`);
} else {
    alert(`${name}, you can do it, man!`);
}
dasdas;