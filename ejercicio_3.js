import { genera_tabla } from "./Modules/generarTabla.js";

let numero; // Declaramos la variable que almacenara el numero ingresado por el usuario
numero = parseInt(prompt("Ingrese el numero de la tabla de multiplicar:"));

let tabla = genera_tabla(numero); // Llamamos a la funcion genera_tabla y almacenamos el resultado en la variable tabla
console.log(`Tabla de multiplicar del ${numero}:`);
for(let i = 0 ; i < tabla.length; i++) // Bucle para mostrar los resultados
{
    console.log(`${numero} x ${i + 1} = ${tabla[i]}`); // Mostramos el resultado en la consola
}