// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let jogador1;
let jogador2;

if( jogador1 == pedra){
    if(jogador2 == tesoura)
    console.log("pedra quebra tesoura");
}else if(jogador2 == papel){
    console.log("papel embrulha a pedra");
}else if(jogador2 == pedra){
    console.log("Empate")
}
