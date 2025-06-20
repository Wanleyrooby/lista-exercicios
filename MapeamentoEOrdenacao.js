const prompt = require('prompt-sync')();

function ordenarPorPreco(produtos) {
    return [...produtos]               
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

const produtos = [
    {nome: "TV", preco: 2000.90},
    {nome: "Notebook", preco: 2500.95},
    {nome: "Teclado", preco: 200.99},
    {nome: "Mouse", preco: 80.99}
];

console.log(ordenarPorPreco(produtos));

