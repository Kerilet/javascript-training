// const zaWarudo = {
//     standtype: 'Punch Rush',
//     standRange: 'Close',
//     attacks: [
//         'Muda Muda',
//         'Stop Time',
//     ],
// };

function breakLine(kills) {
    if (kills.length > 0) {
        return kills.join('<br />');
    }
    return 'None';
}

function checkAge(age) {
    return age ? `${age} years old` : 'Unknown age';
}

function fillCard(ants) {
    let html = '';
    for (let index = 0; index < ants.length; index++) {
        html += `
            <div class="col-sm cardCol">
                <div class="card" style="width: 18rem;">
                    <img src="${ants[index].image}" class="card-img-top" alt="" class="image">
                    <div class="card-body">
                        <h5 class="card-title">${ants[index].fullName}</h5>
                        <p class="card-text" id="description">${ants[index].description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="Age">${checkAge(ants[index].age)}</li>
                        <li class="list-group-item" id="lifeType">${ants[index].lifeType}</li>
                        <li class="list-group-item" id="Kills"><b>Kills:</b><br />${breakLine(ants[index].kills)}</li>
                    </ul>

                </div>
            </div>
        `;
    }
    document.getElementById('row').innerHTML = html;
    document.getElementById('counter').innerHTML = `(${ants.length})`;
}

function loadAnts() {
    // ajax
    fetch('011/ants.json')
        .then(function fn(res) {
            res.json()
                .then(function fn(json) {
                    fillCard(json);
                });
        });
}




loadAnts();

/*

Add pasta 012, e lá usar o .json e o PokeAPI (exemplo acima) para mostrar um pokémon;

*/
