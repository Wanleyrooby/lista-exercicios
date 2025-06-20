const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    mes = mes - 1;

    let data = new Date(ano, mes, dia);

    if (data.getFullYear() === ano && data.getMonth() === mes && data.getDate() === dia) {
        return "Data válida.";
    }
    return "Data inválida.";
}
console.log(ehDataValida(29, 2, 2024)); 
console.log(ehDataValida(29, 2, 1993)); 
console.log(ehDataValida(31, 4, 2025)); 
console.log(ehDataValida(1, 1, 2000));  