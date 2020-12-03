// eslint-disable-next-line no-unused-vars
function hours() {
    const hoursCheck = parseFloat(prompt('How many hours to you want to convert into seconds?'));
    hoursToSeconds(hoursCheck);
}

function hoursToSeconds(hoursCheck) {
    document.body.innerHTML += `${hoursCheck} hour(s) will be converted into ${hoursCheck * 3600} seconds! Have a nice day/evening/night!<br>`;
}
