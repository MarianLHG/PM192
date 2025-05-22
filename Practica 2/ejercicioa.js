const persona={
    nombre: "Ivan Isay",
    edad: 37,
    direccion:{
        ciudad: "Querétaro",
        pais: "México"
    }
};

//destructuración  
const {nombre, edad, direccion:{ciudad, pais}} = persona;

// mensaje
const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;

// imprime el mensaje
console.log(mensaje);