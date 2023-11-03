let nome = prompt("Insira o nome");
let quantidadeExperiencia = parseFloat(prompt("Insira a quantidade de experiência (XP)"));

function Classificadora(nome, quantidadeExperiencia) {
    if (quantidadeExperiencia <= 1000) {
        return  `O Herói de nome ${nome} está no nível de Ferro`
    } else if (quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000) {
        return  `O Herói de nome ${nome} está no nível de Bronze`
    } else if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000) {
        return  `O Herói de nome ${nome} está no nível de Prata`
    } else if (quantidadeExperiencia > 6000 && quantidadeExperiencia <= 7000) {
        return  `O Herói de nome ${nome} está no nível de Ouro`
    } else if (quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000) {
        return  `O Herói de nome ${nome} está no nível de Platina`
    } else if (quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000) {
        return  `O Herói de nome ${nome} está no nível de Ascendente`
    } else if (quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000) {
        return  `O Herói de nome ${nome} está no nível de Imortal`
    } else {
        return  `O Herói de nome ${nome} está no nível de Radiante`
    }
}

console.log(Classificadora(nome,quantidadeExperiencia));