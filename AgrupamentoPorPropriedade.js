const prompt = require('prompt-sync')();

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 },
  { cliente: "Carlos", total: 150 },
  { cliente: "João", total: 100 }
];

const totaisPorCliente = vendas.reduce((acc, venda) => {
  const { cliente, total } = venda;
  acc[cliente] = (acc[cliente] || 0) + total;
  return acc;
}, {});

console.log(totaisPorCliente);