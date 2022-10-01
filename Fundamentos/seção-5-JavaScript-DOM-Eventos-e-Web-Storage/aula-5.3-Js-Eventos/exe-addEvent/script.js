const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const mySelection = document.getElementById('my-selection');

function handleChangeTech(event) {  //Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
    const techElement = document.querySelector('.tech');  
    techElement.classList.remove('tech');  //Deve existir apenas um elemento com a classe 'tech'.
    event.target.classList.add('tech');    // Para isso deve remover e depois adicionar com event target
    input.value = '';
  }
  
  firstLi.addEventListener('click', handleChangeTech);
  secondLi.addEventListener('click', handleChangeTech);
  thirdLi.addEventListener('click', handleChangeTech);

  input.addEventListener('input', function(event) { //Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
  const techElement = document.querySelector('.tech'); // com a classe 'tech'. De todas as boxs
  techElement.innerText = event.target.value;
  });
                                                     
  
  myWebpage.addEventListener('dblclick', function() { //Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
    window.location.replace('https://blog.betrybe.com/');  // redirecione para alguma página;
  });


  myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'magenta';
});                                                           //Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere                                                          
myWebpage.addEventListener('mouseout', function(event) {       // a cor do mesmo;
  event.target.style.color = 'unset';
});

mySelection.addEventListener('mouseover', function(event){
event.target.style.color = 'magenta';
});

mySelection.addEventListener('mouseout', function(event){
    event.target.style.color = 'unset';
    });
