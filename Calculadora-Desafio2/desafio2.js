let quantidadeVitoria = parseFloat(prompt("Insira a quantidade de vitorias"));
let quantidadeDerrotas = parseFloat(prompt("Insira a quantidade de derrotas"));


function Classificadora(quantidadeVitoria, quantidadeDerrotas) {
    let resultado = quantidadeVitoria - quantidadeDerrotas;
    if (resultado < 10) {
        return  `O Herói tem de saldo ${resultado} está no nível de Ferro`
    } else if (resultado >= 11 && resultado <= 20) {
        return  `O Herói tem de saldo ${resultado} está no nível de Bronze`
    } else if (resultado >= 21 && resultado <= 50) {
        return  `O Herói tem de saldo ${resultado} está no nível de Prata`
    } else if (resultado >= 51 && resultado <= 80) {
        return  `O Herói tem de saldo ${resultado} está no nível de Ouro`
    } else if (resultado >= 81 && resultado <= 90) {
        return  `O Herói tem de saldo ${resultado} está no nível de  Diamante`
    } else if (resultado >= 91 && resultado <= 100) {
        return  `O Herói tem de saldo ${resultado} está no nível de Lendário `
    } else {
        return  `O Herói tem de saldo ${resultado} está no nível de Imortal`
    }
}

console.log(Classificadora(quantidadeVitoria, quantidadeDerrotas));