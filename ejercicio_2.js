import { validaAcceso } from "./Modules/validaAcceso.js"; // Importa la función validaAcceso desde el módulo especificado

//la contraseña es (admin123)
let edad = parseInt(prompt("Ingrese su edad:")); // Solicita al usuario que ingrese su edad y la convierte a un número entero
let contraseña = prompt("Ingrese su contraseña:"); // Solicita al usuario que ingrese su contraseña

alert(validaAcceso(edad, contraseña)); // Llama a la función validaAcceso con los valores ingresados y muestra el resultado en una alerta