const age = prompt('What\'s your age?');
const job = confirm('Do you have a job?');
if (age >= 18 && job === true) {
    alert(`Welcome to Russia, land of the vodkas`);
} else {
    if (age >= 18 && job === false) {
        alert(`Go get a job, then you'll be welcome here`);
    } else {
        alert(`Go back to your capitalist country, you filthy degenerate`)
    }
}

