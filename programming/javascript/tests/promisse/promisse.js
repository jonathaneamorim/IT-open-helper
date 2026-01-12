// A Variável minhaPromisse vai receber a classe Promisse
let minhaPromisse = new Promise((resolve, reject) => {
    let sucesso = false; // Simulando uma promisse falha
    setTimeout(() => {
        if(sucesso) {
            // Resolve é um parâmetro da classe Promisse que indica que o processo ocorreu corretamente
            resolve("Operação realizada!");
        } else {
            // Reject é outro parâmetro que indica que a Promisse falhou
            reject("Ocorreu um erro!");
        }
    }, 2000);
});

// Testando a variável minhaPromisse com o valor da varável suceso
minhaPromisse
.then(result => console.log(result))
.catch(error => console.log(error));
/*

    Nesse contexto tudo que vem depois da execução da variável minhaPromisse
    será executado normalmente enquanto a promisse é processada. No caso os dois 
    segundos do setTimeout.

*/

console.log('teste');