import { recorrerArreglo } from "./Modules/consultarArreglo.js"; // Importamos la función para recorrer el arreglo
const arreglo = []; // Creamos un arreglo vacío
let cantidad_elementos = prompt("Ingrese la cantidad de elementos a almacenar en el arreglo: "); // Solicitamos la cantidad de elementos al usuario

for (let i = 0; i < cantidad_elementos; i++) // Recorremos desde 0 hasta la cantidad de elementos
{
    let elemento = prompt(`Ingrese el elemento ${i + 1}: `); // Solicitamos al usuario que ingrese cada elemento
    arreglo.push(elemento); // Agregamos el elemento al arreglo
}

for (let i = 0; i < arreglo.length; i++){ // Recorremos el arreglo para mostrar sus elementos
    let buscar = prompt("Ingrese el elemento a buscar en el arreglo: "); 
    let encontro = recorrerArreglo(arreglo, buscar); // Llamamos a la función para buscar el elemento
    if (encontro === true){ // Si la función retorna true, mostramos un mensaje indicando que se encontró el elemento
    alert("El elemento se encuentra en el arreglo."); // Mostramos mensaje de éxito
}
else{
    alert("El elemento no se encuentra en el arreglo."); // Mostramos mensaje de error
}
}
