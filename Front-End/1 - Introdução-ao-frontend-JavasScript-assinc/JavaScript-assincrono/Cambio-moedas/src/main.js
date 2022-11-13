import Swal from "sweetalert2";
import './style.css';

/**capiturando Ids*/
const searchbutton = document.querySelector(".search-btn");
const coinInput = document.querySelector("#coin-input");
const coinList = document.querySelector(".coins");



/**criando função que será reponsável pelas requisições do fetch */
function fetchAPI(coin) {
    const url = `https://api.exchangerate.host/latest?base=${coin}`;/**adicinando o endereço da api, adicionamos ?base=*/
    return fetch(url)
        .then((respose) => respose.json())
        .then((data) => {
            if(data.base !== coin.toUpperCase()){
                throw new Error('Moeda não existente!')
            }
            return data.rates;
        })
}

/**criando função responsável por criar as ul de forma dinânmica */
function renderCoins(coins) {
    coinList.innerHTML = '';

    const coinsArray = Object.entries(coins);
    console.log(coinsArray);

    coinsArray.forEach((coin) => {
        const [coinName, value] = coin;
        console.log(coinName)
        console.log(value)

        /**inserindo resultado nas lis */
        const li = document.createElement('li');
        li.textContent = `${coinName} - ${value}`;
        coinList.appendChild(li);

    })
}
/**função responsável por ouvir o click */
function handleSearch() {
    const coin = coinInput.value;

    /**fazendo tratamento de erro */

    if (!coin) {
        Swal.fire({
            icon: "error",
            title: 'Opss..,',
            text: 'Você precisa digitar uma moeda válida'
        })
        return;
    }


    fetchAPI(coin)
        .then(renderCoins) /**recebe a função renderCoins */
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: 'Opss..,',
                text: error.message
            })
        })

}
searchbutton.addEventListener('click', handleSearch);


