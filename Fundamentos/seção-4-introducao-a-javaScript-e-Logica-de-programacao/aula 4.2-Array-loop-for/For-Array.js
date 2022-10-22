 const myName = 'Carolina';
 const birthCity = 'Ceará'
 let birthYer = 2030
 console.log(birthYer)

//Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList);
}


//O laço for/of permite iterar os valores das propriedades, 
//nos retornando os números dentro do array numeros.
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


//Por fim, com o for/of, 
//nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}




//Soma dos números impares multiplos de 3 de 0 a 100
let soma = 0;

for(index = 0; index < 100; index += 1){
if(index%2 == 1 && index%3 == 0){
soma=soma+index;
}console.log(soma);
}



//Escreva um programa que, dado um valor qualquer, seja n > 1, imprima na tela
//uma quadro de asteriscos lado de tamanho.
let n = 5;
let linha = '';

for (let index = 0; index < n; index += 1){      //faz as linhas
  linha = linha + '*';
}
for(let index= 0; index < n; index += 1){  // faz as colunas
  console.log(linha);
}
for(let index = 1; index <= n; index += 1){
  console.log('*'.repeat(index));
}

for(let index = 1; index <= n; index += 1){
  console.log('*'.repeat(index) +  '*'.repeat(index));
}