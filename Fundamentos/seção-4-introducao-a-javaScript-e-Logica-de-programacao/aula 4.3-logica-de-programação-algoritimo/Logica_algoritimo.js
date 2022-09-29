// A primeira funcionalidade é a geração do cardápio! A saída que deve ser no formato "ITEM = R$ PREÇO"
 
 let itens = ['milkshake', 'sanduba', 'coxinha', 'hamburguer', 'Pooke'];
 let price = [8, 15, 7, 20, 42];
 
//  console.log(itens.push('Pastelzão')); //adicionando itens na lista | Ao utilizar o .push(), não é necessário saber o último índice do array para adicionar um item.

// //Cardapio 
 console.log(itens[0] + ` R$ = ` + price[0])
 for(let index = 0; index < itens.length; index += 1){
     if(price[index] == undefined){
         console.log(itens[index] + ` = produto sem preço `)
     }
     console.log(itens[index] + ` = R$  ` + price[index])
}


//Segunda parte
//Voce possui uma quantidade de dinheiro e quer um dos lanches
//mas tem apenas 15 reais, quais iteis voce pode comprar?
// let itens = ['milkshake', 'sanduba', 'coxinha', 'hamburguer', 'Pooke'];
// let price = [8, 15, 7, 20, 42];

let dinheiro = 15;
let minhas_compras = [];

 for(let index = 0; index < price.length; index += 1){
     if(price[index] <= dinheiro){
        minhas_compras.push(itens[index])
     }
 }
 console.log(minhas_compras);
