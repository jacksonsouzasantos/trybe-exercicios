//
let nome = 'Milton';
let lastname = 'Nascimento';
let nikname = 'Bituca';
let age = '77';
let bestAlbuns = ['Travessia', 'Clube', 'Minas'];

//Refatorando codigo de cima;
let singer = {
    nome: 'Milton',
    lastname: 'Nascimento',
    nikname: 'Bituca',
    age: '77',
    bestAlbuns: ['Travessia', 'Clube', 'Minas'],
    bornInfo: {    // adicionando mais propriedades ao objeto
        city: 'Rio de Janeiro',
        state: 'Rio de Jneiro',
    }
};

//mostrando saida com ponto .
console.log(singer.nome)
//mostrando o aarquivo com colcletes []

console.log(' O cantor ' + singer['nome'] + ' ' + singer['lastname'] + ' possui ' + singer['age'] + ' anos.');

//criando uma nova propriedade

singer[' fullName '] = singer.name + ' ' + singer.lastname;

//console.table(singer);

//acessando propriedade adicionadas

console.log(' O cantor ' + singer.fullName + ' nasceu no estado ' + singer.bornInfo.state);