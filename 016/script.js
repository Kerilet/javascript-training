const cows = [
    { name: 'A', weight: 'fat', colors: ['Black'] },
    { name: 'B', weight: 'skinny', colors: ['White'] },
    { name: 'C', weight: 'fat', colors: ['White'] },
    { name: 'Y', weight: 'skinny', colors: ['Black'] },
    { name: '8', weight: 'fat', colors: ['White'] },
    { name: 'W', weight: 'skinny', colors: ['Black'] },
    { name: 'X', weight: 'fat', colors: ['Black', 'White'] },
    { name: 'U', weight: 'skinny', colors: ['Black', 'White'] },
    { name: 'J', weight: 'fat', colors: ['Black', 'White'] },
    { name: 'P', weight: 'skinny', colors: ['Black', 'White'] },
    { name: 'Q', weight: 'fat', colors: ['Black', 'White'] },
    { name: 'X', weight: 'skinny', colors: ['Black', 'White'] },
    { name: 'X', weight: 'fat', colors: ['Black'] },
    { name: 'Z', weight: 'skinny', colors: ['White'] },
    { name: 'K', weight: 'fat', colors: ['Black'] },
    { name: 'G', weight: 'skinny', colors: ['Red'] },
    { name: 'M', weight: 'fat', colors: ['Red'] },
];

const handle = (json = []) => {
    // filter = retornar uma nova array com o número de itens menor ou igual à array original
    // deve retornar um booleano para cada item
    const immortals = json.filter((e) => e.isImmortal);
    const pillarMen = json.filter((e) => e.lifeType === 'Pillar Man');
    console.log({ json });
    console.log({ immortals });
    console.log({ pillarMen });

    // map = retorna uma array com o número exato de elementos da array original, mas com transformação
    const enemyNames = json.map((e) => e.fullName);
    const enemiesPlus = json.map((e) => {
        return {
            isImmortal: e.isImmortal,
            fullName: e.fullName,
            firstName: e.fullName.split(' ')[0],
            image: e.image,
            age: checkAge(e.age),
            role: 'Enemy',
        }
    })
    console.log({ enemyNames });
    console.log({ enemiesPlus });

    // find retorna somente 1 único elemento, assim que achar o elemento buscado; Retorna null se não achar
    const vampire = json.find((e) => e.lifeType === 'Vampire');
    console.log({ vampire });

    const noAge = json.find((e) => e.age === null);
    console.log({ noAge });


    const blackAndWhiteCow = cows.find((e) => e.colors.indexOf('Black') >= 0 && e.colors.indexOf('White') >= 0);
    const onlyBlackCows = cows.filter((e) => e.colors.indexOf('Black') >= 0 && e.colors.length === 1);
    const blackOrWhiteCows = cows.filter((e) => e.colors.indexOf('Black') >= 0 || e.colors.indexOf('White') >= 0);
    const blackFatCows = cows.filter((e) => e.colors.indexOf('Black') >= 0 && e.weight === 'fat' && e.colors.length === 1);
    const skinnySaturateCow = cows.find((e) => e.weight === 'skinny' && e.colors.indexOf('Black') < 0 && e.colors.indexOf('White') < 0);

    console.log({ blackAndWhiteCow });
    console.log({ onlyBlackCows });
    console.log({ blackOrWhiteCows });
    console.log({ blackFatCows });
    console.log({ skinnySaturateCow });


    // reduce = varre a array e reduz o resultado em somente 1 elemento
    const ages = enemiesPlus.map((e) => e.age);
    const sumAges = ages.reduce((prev, next) => prev + next);
    const mediumAge = sumAges / ages.length;
    const oldest = ages.reduce((prev, next) => prev > next ? prev : next);

    console.log({ ages })
    console.log({ sumAges })
    console.log({ mediumAge })
    console.log({ oldest })
}

const checkAge = (age) => {
    if (age === null) {
        return Math.floor(Math.random() * 99);
    }
    return age
};

function loadAnts() {
    // ajax
    fetch('/011/ants.json')
        .then(function fn(res) {
            res.json()
                .then(function fn(json) {
                    handle(json);
                });
        });
}


loadAnts();