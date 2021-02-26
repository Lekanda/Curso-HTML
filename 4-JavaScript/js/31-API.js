// NOTIFICATION API

const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    // console.log('Hola');
    Notification.requestPermission()
        .then(resultado=>{
            console.log(`El resultado es ${resultado}`);
        })
})


if(Notification.permission == 'granted'){
    new Notification('Esta es una Notificacion', {
        icon: 'img/imperial.png',
        body: 'Mensaje de Notification'
    })
}
//TODO  Fallo en ventana emergente sobre todo en Chrome





