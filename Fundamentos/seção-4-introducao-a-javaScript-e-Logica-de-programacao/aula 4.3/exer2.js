// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números,
// são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma). 
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;


let intervalo = 2;
let range = 150;
let divisiveis = 0;

for (let index = 0; intervalo <= range.length; index += 1) {
    if (intervalo % 3 === 0) {
        divisiveis += 1;
    }
    intervalo += 1;
}
console.log(divisiveis);

 //const idade1 = 80;
 //const verificaIdade1 = idade1 === '80'; //resultado esperado false
 //console.log(verificaIdade1);
//
 //const idade2 = 26;
//
 //const verificaIdade2 = idade2 == '26'; //Resultado esperado true
 //console.log(verificaIdade2);