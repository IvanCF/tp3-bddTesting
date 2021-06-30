# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista 


Escenario: Test 1.- Verificar el estado inicial de una lista vacia
    Dado una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningún valor

Escenario: Test 2.- Agregar un elemento a una lista vacia
    Dado una lista vacia
    Cuando agrego la clave "clave" con el valor "valor"
    Entonces la lista tiene 1 elemento almacenado.
    Y si busco la clave "clave" obtengo el valor "valor"
    
Escenario: Test 3.- Agregar un elemento que es numero entero a una lista vacia
    Dado una lista vacia
    Cuando agrego la clave 10 con el valor 7
    Entonces la lista no tiene elementos almacenados
    Y si busco la clave 10 no obtengo ningún valor

Escenario: Test 4.- Consulta de un elemento que existe
    Dado una lista vacia
    Cuando se agrega la clave "curso" y valor "testing"
    Entonces si se busca la existencia de la clave "curso" obtengo el valor "testing"

Escenario: Test 5.- Actualizar un elemento que ya existente en la lista
    Dado una lista vacia
    Cuando se agrega la clave "clave" con el valor "new_valor"
    Entonces si se busca la clave "clave" obtengo el valor "new_valor" actualizado

Escenario: Test 6.- Eliminar un elemento que existe en la lista
    Dado una lista vacia
    Cuando se agrega elemento con clave "curso" y valor "testing"
    Y se elimina la clave "curso"
    Entonces si luego busco la clave "curso" se obtiene NaN

 Escenario: Test 7.- Cantidad de elementos en la lista
    Dado una lista vacia
    Cuando se le agrega la clave "e1" con el valor "v1",
    Cuando se le agrega la clave "e2" con el valor "v2",
    Cuando se le agrega la clave "e3" con el valor "v3",
    Entonces existen 3 elementos en la lista 

Escenario: Test 8.- Recuperar las claves (ordenados) de elementos almacenados en la lista
    Dado una lista vacia
    Cuando se le agrega la clave "clave3" y valor "valor3"
    Cuando se le agrega la clave "clave1" y valor "valor1"
    Cuando se le agrega la clave "clave2" y valor "valor2"
    Entonces se obtiene la lista de claves completa y ordenada
    Ejemplos:
    | clave1 | clave2 | clave3 |
  