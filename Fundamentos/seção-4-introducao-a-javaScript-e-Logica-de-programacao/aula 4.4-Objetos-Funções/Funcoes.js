let statusCarro = "desligado";
let aceleracao = 0;
let anguloRotacao = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    } else {
        statusCarro = "desligado"
    }
    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;
    return "Acelerando a " + aceleracao + "m/s";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;
    return "Desacelerando para " + aceleracao + "m/s";
}

function volante(anguloRotacao) {
    aceleracao = aceleracao = anguloRotacao;
    return anguloRotacao + "0";
}



const trybeStudent = {
    name: "Luiza",
    class: 15,
    favoriteSubject: "javascript",
};

console.log(trybeStudent.name + ' ama ' + trybeStudent.favoriteSubject)



const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(property + ' = ' + object[property]);
}

function greetingsMessage(name) {
    console.log("Boas vindas, " + name);
}
greetingsMessage()

for (let i = 0; i <= 10; i += 1) {
    console.log(i);
}



