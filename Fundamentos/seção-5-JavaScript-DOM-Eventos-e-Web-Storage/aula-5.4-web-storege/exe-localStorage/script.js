console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

//inserindo valores salvando valores com setItens
localStorage.setItem('firstname', 'Maria'); // salva uma entrada com a key = 'firstname' e value = 'Maria'
localStorage.setItem('lastname', 'silva'); // salva uma entrada com a key = 'lastname' e value = 'Silva'

//recuperando informações
console.log(localStorage.getItem('lastname')); // pegando nultimo nome com propriedade getItem na chave retorna o valor 'Silva'

//Mostrando informações
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // Conta quantos objetos possui uma entrada, quando existe algum valor contido. Nesse caso o retorno é o valor: 1


//Removendo informções
localStorage.removeItem('lastname');

//limpa tudo do local storage
localStorage.clear(); 


console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

/**
 * Funçoẽs Json e Jsonparse para armazenar em outros formatos qualquer tipo de dados. 
 */

//criando objeto
const Obj = {
    name : '@Mariatecidos.com',
    tel : 286446677,
};

//Transformando em formato de strig com Json.stringfy
localStorage.setItem('chave',JSON.stringify(Obj)); //usa-se a função setItens para salvar. E cria-se o nome para chave eu chamei de "chave"
                                                   //em seguida adicina o json.stringfy e atribui o valor do parâmetro que é o objeto.

//exibindo
console.log(localStorage.getItem('chave'));


//Transformando para formato original com Json.parse
const ObjRecover = JSON.parse(localStorage.getItem('chave'));

//exibindo
console.log(ObjRecover);
