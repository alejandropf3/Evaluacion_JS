import { calcularImpuesto } from "./calculaImpuesto.js";
export const procesar = function(){

    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: ")); // Cantidad de productos

    let total_compra = 0;
    let valorTotal = 0;
    for (let i = 0; i < cantidad; i++)
    {
        let valor = parseFloat(prompt("Ingrese el valor del producto " + (i + 1) + ": ")); // Valor del producto
        let impuesto = parseInt("Ingrese el porcentaje de impuesto para el producto " + (i + 1) + ": "); // Porcentaje de impuesto
        let valorImpuesto = (valor * impuesto) / 100; // Cálculo del valor del impuesto
        valorTotal = calcularImpuesto(valor, valorImpuesto); // Cálculo del valor total con impuesto

        total_compra += valorTotal; // Suma al total de la compra
    }

    alert("El valor total de la compra con impuestos es: " + total_compra.toFixed(2));
}