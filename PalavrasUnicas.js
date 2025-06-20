const prompt = require('prompt-sync')();

let frase = "Jesus Pedro João Paulo João Paulo Pedro é o caminho";
let palavras = frase.split(" ");
//console.log("Lista de palavras: ");
//console.log(palavras);

let palavrasUnicas = [];

for (let i=0; i<palavras.length; i++) {
    let palavraAtual = palavras[i];
    let contagem = 0;
    for (let j=0; j<palavras.length; j++) {
        if (palavraAtual === palavras[j]) {
            contagem++;
        }
    }

    if (contagem === 1 && !palavrasUnicas.includes(palavraAtual)) {
        palavrasUnicas.push(palavraAtual);
    }
}

console.log("Lista de palavras únicas: ");
console.log(palavrasUnicas);