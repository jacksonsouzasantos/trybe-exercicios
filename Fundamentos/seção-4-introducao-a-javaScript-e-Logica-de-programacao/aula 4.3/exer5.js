// 5 - Desenvolva um algoritmo que recebe a idade de 3 pessoas e imprime quem é a pessoa mais nova.
// Exiba o resultado no seguinte formato:
// "Pessoa" é a pessoa mais nova.



 let Catarina = (Math.floor(Math.random() * 50) + 1);
 let Mariana = (Math.floor(Math.random() * 50) + 1);
 let Floriano = (Math.floor(Math.random() * 50) + 1);
 let comparaIdade = ['Catarina', 'Mariana', 'Floriano'];

 if ('Catarina' > 'Floriano' && 'Mariana' > 'Floriano') {
    console.log("'Floriano' é a mais nova. Ela tem " + Floriano + " anos");
} else if (Catarina > Mariana && Floriano > Mariana) {
    console.log("2° pessoa é a mais nova. Ela tem " + Mariana + " anos");
} else if (Floriano > Catarina && Mariana > Catarina ) {
    console.log("1° pessoa é a mais nova. Ela tem " + Catarina + " anos");
}
console.log("  Catarina tem " + Catarina + " anos");
console.log("  Mariana tem " + Mariana + " anos");
console.log(" pessoa é a mais nova tem " + Floriano + " anos");

