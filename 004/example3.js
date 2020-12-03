const triforce = confirm('Do you have the Triforce?');
if (triforce === true) {
    const masterSword = confirm('Do you have the Master ~card~ Sword?');
    if (masterSword === true) {
        alert('Then go kill Ganon! What are you waiting for?');
    } else {
        const health = prompt('How many hearts do you have?');
        if (health >= 20) {
            alert('Then go kill Ganon! What are you waiting for?');
        } else {
            alert('You have died. Continue?');
        }
    }
} else {
    alert('You have died. Continue?');
}






