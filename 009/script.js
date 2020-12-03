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