
export let genera_tabla = (num) =>{

    let resultado = []; // Creamos un array vacio para almacenar los resultados
    for (let i = 1 ; i <= 10; i++) // Bucle que va del 1 al 9
    {
        resultado.push(num * i); // Almacenamos en el array el resultado de num * i
    }
    return resultado; // Devolvemos el array con los resultados
}