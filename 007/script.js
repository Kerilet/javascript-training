function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}
const price = parseInt(prompt('What\'s the price?'));
const payments = parseInt(prompt('How many payments?'));
let rate = percentage(2, 100);
let previousPaymentPrice = price / payments;
let currentPaymentPrice = previousPaymentPrice + rate;
let futurePaymentsPrice = currentPaymentPrice + rate;




/* Informações importantes:

 1 - valor da parcela atual
 
 2 - valor da parcela anterior
 
 3 - valor da próxima parcela

 */



/* Procedimentos necessários 

1 - laço com o numero das parcelas aplicando o juros sob o valor anterior

2 - 
*/

// alert('You will pay ${}');