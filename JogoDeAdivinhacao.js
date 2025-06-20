const prompt = require('prompt-sync')();

let tentativa=1;
let randomNum = Math.floor(Math.random() * 5) + 1;

numero = Number(prompt("Adivinhe um número de 1 a 5: "));

while (numero !== randomNum) {
    if (numero < randomNum) {
        console.log("MAIS ALTO");
    } 
    else if (numero > randomNum) {
        console.log("MAIS BAIXO");
    }
    tentativa++;
    numero = Number(prompt("Tente novamente: "));
}

console.log(" ACERTOU!");
let palavraTentativa = tentativa === 1 ? "tentativa" : "tentativas";
console.log(`Você acertou com ${tentativa} ${palavraTentativa}.`);



