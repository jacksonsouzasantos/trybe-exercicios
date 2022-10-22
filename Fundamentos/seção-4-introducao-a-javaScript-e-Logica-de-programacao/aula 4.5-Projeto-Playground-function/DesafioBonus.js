// Desafio 11
function generatePhoneNumber(numeroArray) {
    let numeroRepetido = 0;
    let numeroAnalisado = 0;
    let verificado = 0;
    let range = 3;
    for (let index = 0; index < numeroArray.length; index += 1) {
      numeroAnalisado = numeroArray[index];
      numeroRepetido = 0;
      if (numeroRepetido < range) {
        for (let index2 = 0; index2 < numeroArray.length; index2 += 1) {
          verificado = numeroArray[index2];
          if (numeroAnalisado === verificado) { numeroRepetido += 1; }
        }
      } if (numeroRepetido >= range) { return 'não é possível gerar um número de telefone com esses valores'; }
    }
    if (numeroArray.length != 11) { return 'Array com tamanho incorreto.' }
    for (index = 0; index < numeroArray.length; index += 1) {
      if (numeroArray[index] < 0 || numeroArray[index] > 9) { return 'não é possível gerar um número de telefone com esses valores' }
    }
  
    let count = 0;
    let phoneNumber;
    phoneNumber = ('(' + numeroArray[0] + numeroArray[1] + ')' + ' '
      + numeroArray[2] + numeroArray[3] + numeroArray[4] + numeroArray[5] + numeroArray[6] + '-' +
      + numeroArray[7] + numeroArray[8] + numeroArray[9] + numeroArray[10]); return phoneNumber;
  
  }
  
  // Desafio 12
  function triangleCheck(faceA, faceB, faceC) {
    // seu código aqui
    let verificaA = faceA < faceB + faceC && faceC > Math.abs(faceB - faceC);
    let verificaB = faceB < faceA + faceC && faceC > Math.abs(faceA - faceC);
    let verificaC = faceC < faceB + faceA && faceA > Math.abs(faceB - faceA);
    return verificaA && verificaB && verificaC;
  }
  
  // Desafio 13
  function hydrate(strigRecebida) {
    // seu código aqui
    let qtDrink = /\d+/g;
    let total = strigRecebida.match(qtDrink);
    let quantidade = 0
    for (let index = 0; index < total.length; index += 1) {
      quantidade = quantidade + parseInt(total[index]);
    }
    if (quantidade === 1) {
      return `1 copo de água`;
    }
    return `${quantidade} copos de água`;
  }
  
  module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
  };
  