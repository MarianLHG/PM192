
function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    //usa await para esperar la promesa de simularPeticion
    const resultado = await simularPeticionAPI();
    //imprime el resultado
    console.log(resultado);
}

//usa la funcion asyn 
obtenerDatos(); 