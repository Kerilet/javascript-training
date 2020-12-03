let totalMoney = 0;
while (totalMoney < 500) {
    let number = parseFloat(prompt(`You still need to insert ${500 - totalMoney}`));
    totalMoney = totalMoney + number;
}

alert('Thanks for your money, sucker!');