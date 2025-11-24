export function calcularPromedio(notas) 
{
    let suma = 0;
    for (let i = 0; i < notas.length; i++)
    {
        suma += notas[i];
    }

    let promedio = parseFloat(suma / notas.length);

    return promedio;
}