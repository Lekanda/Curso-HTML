// PROMESAS  

const usuarioAutenticado = new Promise( (resolve,reject)=>{
    const auth= true;

    if (auth) {
        resolve('Usuario Autenticado');
    } else{
        reject('No se autentico');
    }
});

// console.log(usuarioAutenticado);


usuarioAutenticado
    // Sí auth es true
    .then( resultado=> console.log(resultado))
    // Sí auth es false
    .catch((error)=>{
        console.log(error);
    })


/* 
- En los promises hay 3 valores posibles:
    1- Pending: no se ha cumplido pero no se ha rechazado.
    2- Fullfilled: se ha cumplido OK.
    3- Reject: No se ha cumplido.
*/