module.exports = class Lista {

    constructor() {
        this.elementos = [];
    }


    count() {
        return this.elementos.length;
    }

    find(clave) {
        // console.log("clave: " + clave + " --- cantidad: " + this.count());
        if (this.count() != 0) {

            var indice = this.detectarClave(clave);
            if (isNaN(indice)) {
                return NaN;
            } else {
                return this.elementos[indice].valor;
            }

        } else {
            return NaN;
        }

    }


    add(clave, valor) {
        if ((typeof clave === "string") && (typeof valor === "string")) {

            var indice = this.detectarClave(clave);

            if (isNaN(indice)) {
                this.elementos.push({ clave, valor });
            } else {
                this.elementos[indice].valor = valor;
            }

        } else {
            return NaN;
        }


    }

    /************************* */

    update(clave, valor) {


        var lst = this.elementos;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                this.elementos[i].valor = valor;
                return;
            }
        }

    }

    getSort() {

        this.elementos.sort(this.compare("clave")); //ordena la lista
        console.log(this.elementos); //muestra la lista ordenada

        return true;
    }

    compare(prop) {
        return function(a, b) {
            if (a[prop] < b[prop]) {

                return -1;
            }
            if (a[prop] > b[prop]) {


                return 1;
            }
            return 0;
        };
    }

    eliminar(clave) {
        var lst = this.elementos;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                lst.splice(i, 1);
                return;
            }
        }
    }


    detectarClave(clave) {

        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }



}