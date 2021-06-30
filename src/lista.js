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

    eliminar(clave) {
        var lst = this.elementos;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                lst.splice(i, 1);
                return 1;
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

    mostrarValores() {

        var listado_claves = [];
        var claves_actuales = this.elementos;
        for (var i = 0; i < claves_actuales.length; i++) {
            listado_claves[i] = claves_actuales[i].clave;
        }
        return listado_claves.sort(); //ordenamos
    }

}