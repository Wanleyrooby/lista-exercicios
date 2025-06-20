const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares1 = [['nome', 'Pedro'], ['idade', 18]];
const obj1 = paresParaObjeto(pares1);
console.log("***** OBJETO *****");
console.log(obj1); 

console.log();

const obj2 = [{ nome: 'Jane', idade: 21 }];
const pares2 = objetoParaPares(obj2);
console.log("***** PARES *****");
console.log(pares2); 
