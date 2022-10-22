
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes; //.childNodes para retornar uma coleção viva de nós filhos do elemento pai.
for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {     //.length para verificar o tamanho que todosOsFilhos possui; Como a primeira posição de um array é a posição 0, subtraia 1 do tamanho de todosOsFilhos;
  const filhoAtual = todosOsFilhos[index];               // Armazene o filho atual em uma variável.
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho