
window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFilds);

    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);

    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
    submitBtn.disabled = !agreement.checked; //No nosso código, estamos dizendo que a propriedade disabled do submitBtn é igual à negação da propriedade checked da checkbox agreement. 

    //Primeiramente devemos criar uma função que será o segundo parâmetro do eventListener:
    function handleSubmit(event) {
        event.preventDefault();
    }

    //Agora vamos criar as função responsável por limpar as informações:
    function clearFilds() {
        const formElements = document.querySelectorAll('input');
        const textArea = document.querySelector('textarea');
        for (let index = 0; index < formElements.length; index += 1) {
            const userInput = formElements[index];
            userInput.value = '';
            userInput.checked = false;
        } textArea.value = '';
    }

    //Agora chegou a hora de validar a quantidade de caracteres em cada campo. Todos os campos estão criados como deveriam dentro do HTML.

    function textInputValidation() {
        const email = document.querySelector('#email').value.length;
        const invalidEmail = email < 10 || email > 50;

        const name = document.querySelector('#fullName').value.length;
        const invalidName = name < 10 || name > 40;

        const reason = document.querySelector('#why').value.length;
        const invalidReason = reason > 500;

        if (invalidEmail || invalidName || invalidReason) {
            return false;
        }
        else {
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validation = textInputValidation();
        if (validation === false) {
            alert('Dados inválidos');
        } else {
            alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        }
    }

};

function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}


