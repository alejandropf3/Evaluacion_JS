export const recorrerArreglo = (arreglo, buscar) => { // Función para recorrer el arreglo y buscar un elemento

    for (let i = 0; i < arreglo.length; i++) { // Recorremos el arreglo
        if (arreglo[i] == buscar) // Comparamos cada elemento con el valor a buscar
        {
            return true; // Si lo encontramos, retornamos true
        }
        else{
            return false; // Si no lo encontramos, retornamos false
        }
    }
}