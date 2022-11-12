/**importar biblioteca */
import Swal from "sweetalert2";
import('./style.css');

/**Criando constantes para armazenar imagen,name,btn */

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

/**Inserindo token de acesso */

const BASE_URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

/**Simular erro caso não encontre o id informado*/
const MAX_HEROES = 731;

/**função math para números inteiros aleatórios*/
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

/**Adicionar evento ao botão de click */
button.addEventListener('click', (event) => {

    /** event.preventDefault() para evitar que ele recarregue*/
    event.preventDefault();

    const id = randomId();

    /**fetch com a url gerada pelo id com a função randonId */
    fetch(`${BASE_URL}/${id}.json`)
        .then((result) => result.json()) /**extraindo obj com o .json */
        .then((data) => {/**recuperando informaçoẽs extraídas*/
            img.src = data.images.lg;
            name.innerHTML = data.name;
        })

        /**tratando erro com .cat() */
        .catch((error) => Swal.fire({
            title: 'Hero not found',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});
