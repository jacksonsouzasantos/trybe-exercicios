import './style.css';
import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const BASE_URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

const MAX_HEROES = 732;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  // event.preventDefault() para evitar que ele recarregue
  // a página
  event.preventDefault();

  const id = randomId();

  fetch(`${BASE_URL}/${id}.json`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      img.src = data.images.lg;
      name.innerHTML = data.name;
    })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});