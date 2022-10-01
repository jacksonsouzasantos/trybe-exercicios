//#Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

 const paragraph = document.getElementById('paragraph');
 paragraph.style.color = 'red';
 const title = document.getElementById('page-title');
 title.innerText = 'The hitchhiker\'s guide to the galaxy';

//#Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

 const secondParagraph = document.getElementById('second-paragraph');
 secondParagraph.innerText = 'The answer to life the universe and everything is 42.';


//#Por fim, recupere o subtítulo e altere-o também.

// const subtitle = document.getElementById('subtitle');
// subtitle.innerText = 'So long and thanks for all the fish';

//#Adicione uma classe igual para os dois parágrafos;
//#Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
//#Altere algum estilo do primeiro deles;
//#Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
//#Adicione uma classe igual para os dois parágrafos;

const paragraphs = document.getElementsByClassName('para');

paragraphs[0].style.fontSize = '1.5rem';
paragraphs[0].style.color = 'green';      

const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'red';  