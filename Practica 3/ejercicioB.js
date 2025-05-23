function verificarUsuario(usuario){
    //retorna una promesa
    return new Promise((resolve, reject) => {
        //verifica si el usuario es admin
        if(usuario === "admin"){
            resolve("Usuario verificado");
        }else{
            reject("Usuario no verificado");
        }
    });
}

//usa then(), catch() para manejar el resultado
verificarUsuario("admin")
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


verificarUsuario("Ivan")
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

