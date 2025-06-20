const prompt = require('prompt-sync')();

function versiciloBiblico(verso) {
    console.log(verso);
}

let fn = () => versiciloBiblico("Salmos 23:1");

function debounce(fn, delay) {
    console.log("O SENHOR é meu pastor; nada me faltará.");
    setTimeout(fn, delay);
}

debounce(fn, 3000);