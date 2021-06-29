# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista 

Escenario: Verificar el estado inicial de una lista vacia
    Dado una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor
    