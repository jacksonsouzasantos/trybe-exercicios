function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days'); // selecionando a classe
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index]; // armazena os dias gerados pelos index, que está percorrendo o Array
      const dayListItem = document.createElement('li');  //criando a lista
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem); // Injetando lista no html
    };
  }
  
  createDaysOfTheWeek();

  //O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
  //const arry = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  //Você deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
  

 //criando lista de numeros com os dois últimos dias de novembro e os dias do mês de dezembro
 let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 
 function createDaysOfTheMonth() { //função a ser executada para popular nosso calendário.
  let getDaysList = document.querySelector('#days'); //Essa let armazena o id de days, é puxado pela função querySelector

     for (let index = 0; index < decemberDaysList.length; index += 1) { //loop para percorrer o array e popular  a ul com nossa lista.
    let day = decemberDaysList[index]; //variavel que armazena o dia atual
    let dayItem = document.createElement('li'); //variável armazena novas li que são criadas
    dayItem.innerHTML = day; //adicionando o dia ao valor atual

    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }

  }
}createDaysOfTheMonth();

//Criando um botão

function createHollidayButton(buttobName){
  let buttonContainer = document.querySelector('.buttons-container'); //selecionando elemento que vai ser adicionado esse documento
  let newButton = document.createElement('button'); //criando botão
  let newButtonId = 'btn-holiday';  //variável que vai guardar a string do botão
  
  newButton.innerHTML = buttobName; // adicionando o botão criado as propriedades innerHtml
  newButton.id = newButtonId; //adicionando id ao botão
  
  buttonContainer.appendChild(newButton); //adicionando como filho da div de nossa função
  
}createHollidayButton('Feriados');


//Criando função para mudar cor de fundo
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(19,119,5)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  })
}
setDayColor();

//Implemente uma função que adiciona compromissos à lista “MEUS COMPROMISSOS”

function addNewTask() {  // função e grave os seletores da id
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() { //addEventListener para as variáveis addInputField e getInputField
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li'); //Crie uma tag li com o valor passado pelo input.
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) { //addInputButton, crie uma condicional de validação
    if (event.key === 'Enter' && getInputField.value.length > 0) { //validar a tecla pressionada e a quantidade de caracteres no evento do getInputField.
      let newLi = document.createElement('li'); //Crie a <li>, atribuindo à ela o valor do input.
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();
