function hours() {
    const hours = parseFloat(prompt(`How many hours to you want to convert into seconds?`))
    const conversion = hoursToSeconds(hours)
}

function hoursToSeconds(hours) {
    document.body.innerHTML += `${hours} hour(s) will be converted into ${hours * 3600} seconds! Have a nice day/evening/night!<br>`;
}