const firstQuestion = parseFloat(prompt(`Quais são seus esportes preferidos?

1 - Futebol, automobilismo, esportes radicais
2 - Squash , boliche, voleibol
3 - Aeróbica, spinning
4 - Patinação no Gelo, Ginástica Olímpica
5 - Caça a ursos`));

const secondQuestion = parseFloat(prompt(`Que comidas você prefere?

1 - Churrasco, Massas, Frituras 
2 - Peixe e salada
3 - Sanduíches integrais
4 - Aves acompanhadas de vegetais cozidos no vapor
5 - Capivara, javali, comida muito apimentada`));

const thirdQuestion = parseFloat(prompt(`Na hora do banho, você costuma...

1 - Toma banho rápido, usa xampu e esquece das orelhas ou do pescoço
2 - Toma banho sem pressa mas não exagera
3 - Demora mais de meia hora e usa sabonete líquido
4 - Toma banho com sais e espuma na banheira
5 - Toma banho em 1 minuto, usa sabão em barra`));

const fourthQuestion = parseFloat(prompt(`Qual sua relação com o espelho?

1 - Usa para fazer barba
2 - Admira sua pele e observa seus músculos
3 - Idem c, e ainda analisa a bunda
4 - Admira-se com diferentes camisas e penteados
5 - Não usa`));

const firstAnwser = 10;
const secondAnwser = 10;
const thirdAnwser = 10;
const fourthAnwser = 10;

if (firstQuestion === 1) {
    firstAnwser === 20
} else {
    if (firstQuestion === 2) {
        firstAnwser === 10
    } else {
        if (firstQuestion === 3) {
            firstAnwser === 0
        } else {
            if (firstQuestion === 4) {
                firstAnwser === -10
            } else {
                firstAnwser === 30
            }
        }
    }
}

if (secondQuestion === 1) {
    secondAnwser === 20
} else {
    if (secondQuestion === 2) {
        secondAnwser === 10
    } else {
        if (secondQuestion === 3) {
            secondAnwser === 0
        } else {
            if (secondQuestion === 4) {
                secondAnwser === -10
            } else {
                secondAnwser === 30
            }
        }
    }
}

if (thirdQuestion === 1) {
    thirdAnwser === 20
} else {
    if (thirdQuestion === 2) {
        thirdAnwser === 10
    } else {
        if (thirdQuestion === 3) {
            thirdAnwser === 0
        } else {
            if (thirdQuestion === 4) {
                thirdAnwser === -10
            } else {
                thirdAnwser === 30
            }
        }
    }
}

if (fourthQuestion === 1) {
    fourthAnwser === 20
} else {
    if (fourthQuestion === 2) {
        fourthAnwser === 10
    } else {
        if (fourthQuestion === 3) {
            fourthAnwser === 0
        } else {
            if (fourthQuestion === 4) {
                fourthAnwser === -10
            } else {
                fourthAnwser === 30
            }
        }
    }
}

var results = 10;
const finalAnwser = firstAnwser + secondAnwser + thirdAnwser + fourthAnwser / 4;

if (finalAnwser < 0) {
    results === Bichona
} else {
    if (finalAnwser > 10) {
        results === Hmmmmmm
    } else {
        if (finalAnwser > 20) {
            results === Homem
        } else {
            if (finalAnwser > 30) {
                results === Macho
            } else {
                results === Rambo
            }
        }
    }
}

const anwserReveal = confirm(`Sua média de pontos foi ${finalAnwser}, portanto você é ${results}`);