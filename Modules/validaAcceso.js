export const validaAcceso = function(edad, contraseña) // Definimos la funcion expresada validaAcceso que recibe dos parámetros: edad y contraseña
{
    if (edad >= 18 && contraseña === "admin123") // Verifica si la edad es mayor o igual a 18 y si la contraseña es igual a "admin123"
    {
        return "Acceso concedido"; // Si ambas condiciones son verdaderas, devuelve "Acceso concedido"
    }
    else{ // Si alguna de las condiciones no se cumple
        return "Acceso denegado"; // Devuelve "Acceso denegado"
    }
}