// eslint-disable-next-line no-unused-vars
function stripedInfo() {
    let num = parseInt(prompt('Please enter the number of lines you\'d like'));
    let col1 = prompt('Please enter the first color');
    let col2 = prompt('Please enter the second color');
    stripedFun(num, col1, col2);
}

function stripedFun(num, col1, col2) {
    for (let index = num; index >= 1; index--) {
        document.body.innerHTML += `<div style="background-color: ${index % 2 === 0 ? col1 : col2};">Stripes are fun!<br>`;
    }
}

/*
function textToRGB(text) {
    if (text === 'red') return 'rgb(255,0,0)';
    else if (text === 'green') return 'rgb(0,255,0)';
    throw new Error('Please enter a colour you stupid degenerate');
}

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
   } */
