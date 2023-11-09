const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')


const menorValor = 1
const maiorValor = 1000

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatório()

function gerarNumeroAleatório() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto: ' + numeroSecreto);