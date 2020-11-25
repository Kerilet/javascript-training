/* on click = first color
on click = second color
on click = how many repeats
even lines = first color
odd lines = second color
*/

function stripedInfo() {
    let num = parseInt(prompt(`Please enter the number of lines you'd like`));
    let col1 = prompt(`Please enter the first color`)
    let col2 = prompt(`Please enter the second color`)
    const info = stripedFun(num, col1, col2);
}

function stripedFun(num, col1, col2) {
    if (col1 == 'green' && col2 == 'blue') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #00FF00;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #0000ff;">are fun<br>`;
            }
        }
    } else if (col1 == 'red' && col2 == 'blue') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #FF0000;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #0000ff;">are fun<br>`;
            }
        }
    } else if (col1 == 'red' && col2 == 'green') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #FF0000;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #00FF00;">are fun<br>`;
            }
        }
    } else if (col1 == 'blue' && col2 == 'green') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #0000FF;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #00FF00;">are fun<br>`;
            }
        }
    } else if (col1 == 'green' && col2 == 'red') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #00FF00;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #FF0000;">are fun<br>`;
            }
        }
    } else if (col1 == 'blue' && col2 == 'red') {
        for (let index = num; index >= 1; index--) {
            if (index % 2 === 0) {
                document.body.innerHTML += `<div style="background-color: #0000FF;">Stripes<br>`;
            } else {
                document.body.innerHTML += `<div style="background-color: #FF0000;">are fun<br>`;
            }
        }
    }
}