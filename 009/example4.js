// eslint-disable-next-line no-unused-vars
function nameCheck(inputId) {
    const name = document.getElementById(inputId).value;
    const nameSize = name.length;
    nameStandardize(name, nameSize);
}

function nameStandardize(name, nameSize) {
    if (nameSize < 3) {
        alert('Your full name is too short, please try again');
    } else {
        alert('Thanks for entering your name!');
    }
}
