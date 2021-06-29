const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given('una lista vacia', function() {
    contexto.lista = new Lista();
    // return 'pending';
});

Then('la lista tiene {int} elemento(s) almacenado(s)', function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
    //return 'pending';
});

Then('si busco la clave {string} no obtengo ningun valor', function(clave) {
    expect(contexto.lista.count()).to.be.equal(0);
    //return 'pending';
});