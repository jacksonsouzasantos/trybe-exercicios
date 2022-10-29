/*Crie uma função que retorne um array em ordem crescente*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (arry) => {

const ordemNumSort = arry.sort((a,b) => a - b);
return ordemNumSort;
};
const sortArmazena =  sortOddsAndEvens(oddsAndEvens);
console.log(`Os numeros ${sortArmazena} se encontram ordenados`);

