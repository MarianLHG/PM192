const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
]; 

// buscar una persona por el metodo find
const buscarPersona = personas.find(persona => persona.nombre === "Luis");

// imprime el resultado
console.log("La persona econtrada es: ");
console.log(buscarPersona);


console.log("Estas son las personas que estan dentro del arreglo" ); 
// Imprimir el nombre de todas las personas
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

// suma las edades de todas las personas
const totalEdades = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);

// Imprimir la suma de las edades
console.log(`La suma de las edades de las personas dentro del arreglo es: ${totalEdades}`);


