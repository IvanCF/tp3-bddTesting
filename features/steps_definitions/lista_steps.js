const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given('una lista vacia', function() {
    contexto.lista = new Lista();

});


When('agrego la clave {string} con el valor {}', function(clave, valor) {
    contexto.lista.add(clave, valor);

})

Then('la lista tiene {int} elemento(s) almacenado(s)', function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);

});

Then('si busco la clave {string} no obtengo ningun valor', function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;

});

Then('si busco la clave {string} obtengo el valor {}', function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);

});