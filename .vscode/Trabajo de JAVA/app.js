
const productos = ["Arepa", "Empanada", "Buñuelo", "Jugo"];
const precios = [3000, 3500, 2000, 4000];


productos.push("Café");
precios.push(2500);

productos.push("Gaseosa");
precios.push(3000);


productos.pop();
precios.pop();

console.log("¿Existe Jugo en la tienda?:", productos.includes("Jugo"));


const baratos = precios.filter(precio => precio <= 3000);


const conIva = precios.map(precio => Math.round(precio * 1.19));

console.log("Precios baratos:", baratos);
console.log("Precios con IVA:", conIva);


const listaUI = document.getElementById("lista");

productos.forEach((producto, i) => {
    const li = document.createElement("li");
    li.textContent = `${producto} - $${precios[i]}`;
    listaUI.appendChild(li);
});

const listaBaratosUI = document.getElementById("lista-baratos");

productos.forEach((producto, i) => {
    if (precios[i] <= 3000) {
        const li = document.createElement("li");
        li.textContent = `${producto} - $${precios[i]}`;
        listaBaratosUI.appendChild(li);
    }
});