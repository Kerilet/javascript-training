// eslint-disable-next-line no-unused-vars
function numbers() {
    const weight = parseFloat(prompt('How much do you weight (in kilograms)?'));
    const height = parseFloat(prompt('How tall are you (in meters)?'));
    const doubleHeight = height * height;
    IMCCheck(weight, height, doubleHeight);
}

function IMCCheck(weight, height, doubleHeight) {
    if (weight / doubleHeight <= 18.5) {
        document.body.innerHTML += `Your CMI is ${weight / doubleHeight}, so you are in underweight conditions!<br>`;
    } else if (weight / doubleHeight <= 24.9) {
        document.body.innerHTML += `Your CMI is ${weight / doubleHeight}, so you are in regular conditions!<br>`;
    } else if (weight / doubleHeight <= 29.9) {
        document.body.innerHTML += `Your CMI is ${weight / doubleHeight}, so you are in overweight conditions!<br>`;
    } else if (weight / doubleHeight <= 39.9) {
        document.body.innerHTML += `Your CMI is ${weight / doubleHeight}, so you are in obese conditions!<br>`;
    } else if (weight / doubleHeight > 40) {
        document.body.innerHTML += `Your CMI is ${weight / doubleHeight}, so you are in morbidly obese conditions!<br>`;

        function stateCheck(inputId) {
            const state = document.getElementById(inputId).value.toLowerCase();
            const pos1 = state.indexOf('rio grande do sul');
            const pos2 = state.indexOf(`paraná`);
            const pos3 = state.indexOf(`santa catarina`);
            southCheck(pos1, pos2, pos3);
        }

        function southCheck(pos1, pos2, pos3) {
            if (pos1 >= 0 || pos2 >= 0 || pos3 >= 0) {
                alert(`We do not do business in that region!`)
            } else {
                alert(`Thanks, we'll be in touch soon!`)
            }
        }
