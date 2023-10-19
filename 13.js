//Se trata de escribir el programa que permita emitir la factura correspondiente a una compra de un articulo determinado, del que se adquieren una o varias unidades. El IVA es del 15% y si el precio bruto ( precio venta mas IVA) es mayor de 50.000 pesos se debe realizar un descuento del 5% 

var precio = 12000
var cantidad = 2
var IVA = 0.15
var descuento = 0.05

var precioVenta = precio * cantidad
var precioIva = precioVenta * IVA
var precioTotal = precioVenta + precioIva

if (precioTotal > 50000) {
    precioTotal = precioTotal - (precioTotal * descuento)
}

console.log("El precio total es: " + precioTotal)