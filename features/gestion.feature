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


