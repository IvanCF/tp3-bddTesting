const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given('una lista vacia', function() {
    contexto.lista = new Lista();

});

//*************** CASO 1 **************** */


Then("la lista tiene {int} elemento(s) almacenado(s)", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco la clave {string} no obtengo ningún valor", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

/********************* CASO 2 ************************* */

When('agrego la clave {string} con el valor {}', function(clave, valor) {
    contexto.lista.add(clave, valor);

})

Then('la lista tiene {int} elemento(s) almacenado(s).', function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);

});

Then('si busco la clave {string} obtengo el valor {}', function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);

});

/*** ************ caso 3 ***/

When("agrego la clave {int} con el valor {int}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("la lista no tiene elementos almacenados", function() {
    expect(contexto.lista.count()).to.be.equal(0);
});

Then("si busco la clave {int} no obtengo ningún valor", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});



/******************* caso 4 ********************/

When("se agrega la clave {string} y valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then('si se busca la existencia de la clave {string} obtengo el valor {string}', function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);

});

/*******************caso 5**************** */
When("se agrega la clave {string} con el valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("si se busca la clave {string} obtengo el valor {string} actualizado", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});