// 1 - Desenvolva um algoritmo que calcula a soma dos números 1 até 50 usando a estrutura condicional "for". 
// Retorne a resposta no seguinte formato:
// A soma total de 1 até 50 é: X

const numero = [10, 20, 30, 40, 50]
let total = 0;

for(let index = 0; index < numero.length; index += 1){
    total = total + numero[index];
    console.log(`A soma total de 1 até 50 é : ` +  [total])
}
