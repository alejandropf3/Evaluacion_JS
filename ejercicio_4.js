import { calculaImpuesto } from "./Modules/calculaImpuesto.js"; //importo la funcion que calcula impuestos
const procesarImpuestos = function(){ //funcion que procesa los impuestos
    let cantidad_productos = parseInt(prompt("Ingrese la cantidad de productos a procesar: "));
    let total_final = 0;

    for(let i = 0; i < cantidad_productos; i++)
    {
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}: `));
        let porcentaje = parseInt(prompt(`Ingrese el porcentaje de impuesto prara el producto ${i+1}:`))
        let impuesto = calculaImpuesto(valor, porcentaje); //llamo a la funcion que calcula impuestos
        let valor_con_impuesto = valor + impuesto;
        total_final += valor_con_impuesto;
    }

    alert(`El valor total final con impuestos es: ${total_final}`);
}

procesarImpuestos(); //llamo a la funcion que procesa los impuestos