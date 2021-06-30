const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;
const assert = require("chai").assert;
const Lista = require("../../src/lista.js");


let contexto = {};

Given('una lista vacia', function() {
    contexto.lista = new Lista();

});

//*****************************[ CASO 1 ] ********************************* */


Then("la lista tiene {int} elemento(s) almacenado(s)", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco la clave {string} no obtengo ningún valor", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

//*****************************[ CASO 2 ] ********************************* */

When('agrego la clave {string} con el valor {}', function(clave, valor) {
    contexto.lista.add(clave, valor);

})

Then('la lista tiene {int} elemento(s) almacenado(s).', function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);

});

Then('si busco la clave {string} obtengo el valor {}', function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);

});

//*****************************[ CASO 3 ] ********************************* */

When("agrego la clave {int} con el valor {int}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("la lista no tiene elementos almacenados", function() {
    expect(contexto.lista.count()).to.be.equal(0);
});

Then("si busco la clave {int} no obtengo ningún valor", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});


//*****************************[ CASO 4 ] ********************************* */

When("se agrega la clave {string} y valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then('si se busca la existencia de la clave {string} obtengo el valor {string}', function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);

});

//*****************************[ CASO 5 ] ********************************* */

When("se agrega la clave {string} con el valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("si se busca la clave {string} obtengo el valor {string} actualizado", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

//*****************************[ CASO 6 ] ********************************* */

When("se agrega elemento con clave {string} y valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

When("se elimina la clave {string}", function(clave) {
    expect(contexto.lista.eliminar(clave)).to.be.equal(1);
});

Then("si luego busco la clave {string} se obtiene NaN", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

//*****************************[ CASO 7 ] ********************************* */

When("se le agrega la clave {string} con el valor {string},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("existen {int} elementos en la lista", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

//*****************************[ CASO 8 ] ********************************* */

When("se le agrega la clave {string} y valor {string}", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("se obtiene la lista de claves completa y ordenada", function(vector) {
    vector = vector.rawTable;
    assert.deepEqual(contexto.lista.mostrarValores(), vector);


});