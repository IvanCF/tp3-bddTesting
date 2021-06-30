# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista 


Escenario: Verificar el estado inicial de una lista vacia
    Dado una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Escenario: Agregar un elemento a una lista vacia
    Dado una lista vacia
    Cuando agrego la clave "clave" con el valor "valor"
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "clave" obtengo el valor "valor"
    
Escenario: Agregar un elemento a una lista vacia
    Dado una lista vacia
    Cuando agrego la clave "numero" con el valor 7
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "numero" obtengo el valor 7


