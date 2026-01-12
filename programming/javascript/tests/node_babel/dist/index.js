"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Definindo a classe Carro
var Carro = /*#__PURE__*/function () {
  function Carro(marca, modelo, ano) {
    _classCallCheck(this, Carro);
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.status = 'Parado';
  }

  // Método para ligar o carro
  return _createClass(Carro, [{
    key: "ligar",
    value: function ligar() {
      this.status = 'Ligado';
      console.log("".concat(this.modelo, " est\xE1 agora ").concat(this.status, "."));
    }

    // Método para desligar o carro
  }, {
    key: "desligar",
    value: function desligar() {
      this.status = 'Desligado';
      console.log("".concat(this.modelo, " est\xE1 agora ").concat(this.status, "."));
    }

    // Método para mostrar as informações do carro
  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      console.log("Carro: ".concat(this.marca, " ").concat(this.modelo, " - Ano: ").concat(this.ano));
    }
  }]);
}(); // Definindo a classe Pessoa
var Pessoa = /*#__PURE__*/function () {
  function Pessoa(nome, idade, carro) {
    _classCallCheck(this, Pessoa);
    this.nome = nome;
    this.idade = idade;
    this.carro = carro; // Relacionamento com o objeto Carro
  }

  // Método para a pessoa dirigir o carro
  return _createClass(Pessoa, [{
    key: "dirigir",
    value: function dirigir() {
      if (this.carro.status === 'Ligado') {
        console.log("".concat(this.nome, " est\xE1 dirigindo o ").concat(this.carro.modelo, "."));
      } else {
        console.log("".concat(this.nome, " n\xE3o pode dirigir, o ").concat(this.carro.modelo, " est\xE1 desligado."));
      }
    }

    // Método para mostrar as informações da pessoa
  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      console.log("Pessoa: ".concat(this.nome, " - Idade: ").concat(this.idade));
    }
  }]);
}(); // Criando um objeto carro
var carro1 = new Carro('Toyota', 'Corolla', 2020);

// Criando uma pessoa e associando um carro a ela
var pessoa1 = new Pessoa('João', 28, carro1);

// Manipulando as classes e seus métodos
carro1.mostrarInfo(); // Exibe as informações do carro
pessoa1.mostrarInfo(); // Exibe as informações da pessoa
pessoa1.dirigir(); // Tenta dirigir o carro antes de ligá-lo

carro1.ligar(); // Liga o carro
pessoa1.dirigir(); // Agora pode dirigir após ligar o carro
carro1.desligar(); // Desliga o carro

// Criação de outro carro e outro usuário
var carro2 = new Carro('Honda', 'Civic', 2022);
var pessoa2 = new Pessoa('Maria', 30, carro2);
carro2.mostrarInfo();
pessoa2.mostrarInfo();
pessoa2.dirigir(); // Tentando dirigir o novo carro

// Finalizando com informações
console.log('--- Fim do programa ---');