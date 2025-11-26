//creo una funcion declarada que calcula impuestos
export function calculaImpuesto(valor, porcentaje)
{
    let valor_impuesto = (valor * porcentaje) / 100; //calculo el valor del impuesto
    return valor_impuesto; //retorno el valor del impuesto
}