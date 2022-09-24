// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" 
// levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".


let toten = ['pedra', 'papel','tesoura'];

let player1 = toten[Math.floor(Math.random() * 2) + 1];                         //O Math.floor()método arredonda um número PARA BAIXO para o inteiro mais próximo.
let player2 = toten[Math.floor(Math.random() * 2) + 1];                        //O Math.random()método retorna um número aleatório de 0 (inclusive) até, mas não incluindo, 1 (exclusivo).
                                                                              //Math.floor((Math.random() * 2) + 1) retornar jogadas aleatótias entre 0 e 2

if(player1 === toten[0]){
    if(player2 === toten[1]){
        console.log("pedra quebra tesoura, player1 wins");
    }else if(player2 === toten [2]){
        console.log("papel cobre pedra, player2 wins");
    }else{
        console.log("draw");
    }
}else if(player1 === toten[1]){
    if(player2 === toten[0]){
        console.log("pedra quebra tesoura, player2 wins");
    }else if(player2 === toten [2]){
        console.log("tesoura corta papel, player1 wins");
    }else{
        console.log("draw");
    } 
}else if(player1 === toten[2]){
    if(player2 === toten[0]){
        console.log("papel cobre pedra, player1 wins");
    }else if(player2 === toten [1]){
        console.log("tesoura corta papel, player2 wins");
    }else{
        console.log("draw");
    } 
}

console.log(`player1${player1}`, `player2${player2}`);
//console.log(["player1", player1].join(' '), ["player2", player2].join(' ')); //contatenando commétodo join.