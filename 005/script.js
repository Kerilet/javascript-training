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



const finalAnwser = firstQuestion + secondQuestion + thirdQuestion + fourthQuestion / 4;
const anwserReveal = confirm(`Sua média de pontos foi ${finalAnwser}, portanto você é ${results}`)
