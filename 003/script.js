const wendelAge = 14;


if (wendelAge > 18) {
    alert('Wendel PODE beber água que passarinho não bebe');
} else {
    alert('Wendell bebeu agua que passrinho não bebe, e agora?');
}


// Exercises
const tvPrice = 5001;
const monthlyBudget = 500;
const payments = 10;

// Mostrar um alert para usuário informando se o valor da parcela é superior ao orçamento mensal. As opções são:
// - You can't buy this TV. Payment price: R$ .....
// - You can do it, man!

const paymentPrice = tvPrice / payments;

if (paymentPrice > monthlyBudget) {
    alert(`You can't buy this TV. Payment price: R$${paymentPrice}`);
} else {
    alert('You can do it, man!');
}
