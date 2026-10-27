const producto = "Camiseta Deportiva";
const precio = 50000;
let cantidad = 3;
const hayStock = true;

mostrarResumen();

function calcularTotal(precioProducto, cantidadProducto) {
    const IVA = 0.19;
    let total = precioProducto * cantidadProducto;

    if (cantidadProducto >= 3) {
        let descuento = total * 0.10;
        total = total - descuento;
    }

    return total * (1 + IVA);
}

function mostrarResumen() {
    const esValido = hayStock && cantidad > 0;
    const mensaje = producto + ": " + (esValido ? calcularTotal(precio, cantidad) : "Sin stock");

    console.log(mensaje);

    const contenedorDOM = document.getElementById("resultado-compra");
    if (contenedorDOM) {
        contenedorDOM.textContent = mensaje;
    }
}

console.log("--- RESULTADOS DE LAS PRUEBAS ---");

console.log("Caso 1 (3 unidades):");
cantidad = 3;
mostrarResumen();

console.log("Caso 2 (1 unidad):");
cantidad = 1;
mostrarResumen();