const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n < 0) {
        throw new Error("A variável n deve ser maior ou igual a 0.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

let numero = Number(prompt("Digite um número para calcular o fatorial: "));
let f = fatorial(numero);
console.log(`O fatorial de ${numero} é:  ${f}`);