const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', (event) => {
  const character = event.key; //Utilizando o event.key é possível capturar qual tecla foi pressionada e então submeter o caractere correspondente a uma condição.
  if (character !== 'a') {
    event.preventDefault();
  }
});