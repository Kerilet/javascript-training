function dell() {
    const num = parseFloat(prompt(`Please enter a number`));
    const symbol = prompt(`Please write down a math operation`);
    const num2 = parseFloat(prompt('Please enter another number'));
    const text = jesse(num, symbol, num2);
    document.body.innerHTML += `<div style="background: #F00">${text}</div>`;
}

function jesse(jnum, jsymbol, jnum2) {
    if (jsymbol === '+') {
        return `${jnum} + ${jnum2} = ${jnum + jnum2} `;
    } else if (jsymbol === '-') {
        return `${jnum} - ${jnum2} = ${jnum - jnum2} `;
    } else if (jsymbol === '*') {
        return `${jnum} * ${jnum2} = ${jnum * jnum2} `;
    } else if (jsymbol === '/') {
        return `${jnum} / ${jnum2} = ${jnum / jnum2}`;
    }
    return 'Invalid operation';
}

/* on click = first color
on click = second color
on click = how many repeats
even lines = first color
odd lines = second color
*/