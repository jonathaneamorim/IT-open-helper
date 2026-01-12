// script.js

(function() {
    // Função para calcular a soma de dois números
    function soma(a, b) {
        let resultado = a + b;
        return resultado;
    }

    // Função para calcular a diferença entre dois números
    function subtracao(a, b) {
        let resultado = a - b;
        return resultado;
    }

    // Função para calcular o produto de dois números
    function multiplicacao(a, b) {
        let resultado = a * b;
        return resultado;
    }

    // Função para calcular a divisão de dois números
    function divisao(a, b) {
        if (b === 0) {
            console.error("Não é possível dividir por zero");
            return undefined;
        }
        let resultado = a / b;
        return resultado;
    }

    // Função para calcular o módulo de dois números
    function modulo(a, b) {
        let resultado = a % b;
        return resultado;
    }

    // Função para imprimir os resultados das operações
    function imprimirResultados(a, b) {
        console.log("Soma: " + soma(a, b));
        console.log("Subtração: " + subtracao(a, b));
        console.log("Multiplicação: " + multiplicacao(a, b));
        console.log("Divisão: " + divisao(a, b));
        console.log("Módulo: " + modulo(a, b));
    }

    // Chamada das funções com números de exemplo
    let numero1 = 10;
    let numero2 = 5;
    imprimirResultados(numero1, numero2);
})();
