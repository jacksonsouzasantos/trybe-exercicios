
// Desafio 1
function compareTrue(valor1, valor2) {
    // seu código aqui
    if (valor1 === valor2 && valor2 === true) {
      return true;
    } else {
      return false;
    }
  }
  
  // Desafio 2
  function calcArea(ladoA, ladoB) {
    // seu código aqui
    let angulos = (ladoA * ladoB) / 2;
    let area = angulos;
    return area;
  }
  
  // Desafio 3
  function splitSentence(word) {
    // seu código aqui
    let result = word.split(' ', 3);
    return result;
  }
  
  // Desafio 4
  function concatName(strig) {
    // seu código aqui
    return `${strig[strig.length - 1]}, ${strig[0]}`;
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    // seu código aqui
    let winsPrice = 3;
    let tiesPrice = 1;
  
    return winsPrice * wins + tiesPrice * ties;
  
  }
  
  // Desafio 6
  function highestCount(arry) {
    // seu código aqui
    let maiorCont = arry[0];
    for (let index = 0; index < arry.length; index += 1) {
      if (arry[index] > maiorCont) {
        maiorCont = arry[index];
      }
    }
    let start = 0;
    for (let index2 = 0; index2 < arry.length; index2 += 1) {
      if (maiorCont === arry[index2]) {
        start += 1;
      }
    }
    return start;
  }
  
  
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
  
    let posiCat1 = Math.abs(mouse - cat1);
    let posiCat2 = Math.abs(mouse - cat2);
  
    if (posiCat1 < posiCat2) {
      return "cat1";
    } else if (posiCat2 < posiCat1) {
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge";
    }
  }
  
  // Desafio 8
  function fizzBuzz(intervalo) {
    // seu código aqui
    let result = [];
  
    for (let valor of intervalo) {
      if (valor % 3 === 0 && valor % 5 === 0) {
        result.push('fizzBuzz');
      } else if (valor % 3 === 0) {
        result.push('fizz');
      } else if (valor % 5 === 0) {
        result.push('buzz');
      } else {
        result.push('bug!');
      }
    }
    return result;
  }
  
  // Desafio 9
  function encode(codigo) {
    // seu código aqui
  
    let letra = ['a', 'e', 'i', 'o', 'u'];
    for (let index = 1; index <= letra.length; index += 1) {
      codigo = codigo.replace(RegExp(letra[index - 1], 'g'), index);
    }
    return codigo;
  }
  function decode(codigo) {
    // seu código aqui
    let letra = ['a', 'e', 'i', 'o', 'u'];
    for (let index = 1; index <= letra.length; index += 1) {
      codigo = codigo.replace(RegExp(index.toString(), 'g'), letra[index - 1]);
    }
    return codigo;
  }
  
  // Desafio 10
  function techList(tecnologias, nome) {
    // seu código aqui
    let arrayResult = [];
    if (tecnologias.length === 0) {
      return 'Vazio!';
    }
  
    let NomeTecnologia = tecnologias.sort();
  
    for (let index = 0; index < tecnologias.length; index += 1) {
      arrayResult.push({
        tech: NomeTecnologia[index],
        name: nome,
      });
    }
    return arrayResult;
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  };
  