const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];

//filtrar productos cuyo precio sea mayor a 1000
const productosFiltrados = productos.filter(producto => producto.precio > 1000);

console.log("Estos son los productos que tienen un precio mayor a $1000: ");
// imprimir arreglo de productos filtrados
console.log(productosFiltrados);

//mapear productos filtrados para obtener un nuevo array con los nombres de los productos
const nombresPF = productosFiltrados.map(producto => producto.nombre); 

console.log("Estos son los nombres de los productos que tienen un precio mayor a $1000: ");
// imprimir arreglo de los nombre de productos mayores a $1000
console.log(nombresPF);