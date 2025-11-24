import { calcularPromedio } from "./Modules/calcularPromedio.js";
const notas = []; // Creamos un array vacío para almacenar las notas

let cantidadnotas = parseInt(prompt("¿Cuántas notas deseas ingresar?")); // Pedimos al usuario la cantidad de notas

for (let i = 0; i < cantidadnotas; i++)
{
    let nota = parseFloat(prompt("Ingresa la nota "+(i+1)+": ")) // Pedimos al usuario que ingrese cada nota
    if (nota < 0 || nota > 5) // Validamos que la nota esté entre 0 y 5
    {
        alert("La nota debe estar entre 0 y 5. Intenta de nuevo.");
    }
    else{
        notas.push(nota); // Agregamos la nota al array
    }
}

let promedio = calcularPromedio(notas); // Llamamos a la función para calcular el promedio

if (promedio >= 4.5)
{
    alert(`El promedio es ${promedio.toFixed(2)} - Rendimiento Alto`)
}
else if (promedio >= 3 && promedio < 4.5)
{
    alert(`El promedio es ${promedio.toFixed(2)} - Rendimiento Medio`)
}
else if (promedio < 3)
{
    alert(`El promedio es ${promedio.toFixed(2)} - Rendimiento Bajo`)
}

