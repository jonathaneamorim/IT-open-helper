// Definindo a classe Carro
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.status = 'Parado';
    }
  
    // Método para ligar o carro
    ligar() {
      this.status = 'Ligado';
      console.log(`${this.modelo} está agora ${this.status}.`);
    }
  
    // Método para desligar o carro
    desligar() {
      this.status = 'Desligado';
      console.log(`${this.modelo} está agora ${this.status}.`);
    }
  
    // Método para mostrar as informações do carro
    mostrarInfo() {
      console.log(`Carro: ${this.marca} ${this.modelo} - Ano: ${this.ano}`);
    }
  }
  
  // Definindo a classe Pessoa
  class Pessoa {
    constructor(nome, idade, carro) {
      this.nome = nome;
      this.idade = idade;
      this.carro = carro; // Relacionamento com o objeto Carro
    }
  
    // Método para a pessoa dirigir o carro
    dirigir() {
      if (this.carro.status === 'Ligado') {
        console.log(`${this.nome} está dirigindo o ${this.carro.modelo}.`);
      } else {
        console.log(`${this.nome} não pode dirigir, o ${this.carro.modelo} está desligado.`);
      }
    }
  
    // Método para mostrar as informações da pessoa
    mostrarInfo() {
      console.log(`Pessoa: ${this.nome} - Idade: ${this.idade}`);
    }
  }
  
  // Criando um objeto carro
  let carro1 = new Carro('Toyota', 'Corolla', 2020);
  
  // Criando uma pessoa e associando um carro a ela
  let pessoa1 = new Pessoa('João', 28, carro1);
  
  // Manipulando as classes e seus métodos
  carro1.mostrarInfo();    // Exibe as informações do carro
  pessoa1.mostrarInfo();   // Exibe as informações da pessoa
  pessoa1.dirigir();       // Tenta dirigir o carro antes de ligá-lo
  
  carro1.ligar();          // Liga o carro
  pessoa1.dirigir();       // Agora pode dirigir após ligar o carro
  carro1.desligar();       // Desliga o carro
  
  // Criação de outro carro e outro usuário
  let carro2 = new Carro('Honda', 'Civic', 2022);
  let pessoa2 = new Pessoa('Maria', 30, carro2);
  
  carro2.mostrarInfo();
  pessoa2.mostrarInfo();
  pessoa2.dirigir();       // Tentando dirigir o novo carro
  
  // Finalizando com informações
  console.log('--- Fim do programa ---');
  