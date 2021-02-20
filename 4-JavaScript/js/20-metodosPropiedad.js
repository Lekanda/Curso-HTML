// Metodos de Propiedad.
const reproductor = {
    reproducir:function (id) {
        console.log(`Reproduciendo cancion : ${id}`);
    },
    pausar:function () {
        console.log('Pausando...');
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Borrando cancion: ${id}`);
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(5000);