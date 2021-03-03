const {series} = require('gulp');

//Done => hecho y corta el codigo.
function css(done) {
    console.log('Compilando');
    done();
}

function javascript(done) {
    console.log('Compilando JS');
    done();
}

function minificarHTML(done) {
    console.log('Minificando');
    done();
}

// Asi llamamos a la funcion.
exports.css = css;
exports.javascript = javascript;
// Ejecuta en serie las fuunciones; 1º css 2º javascript
exports.tareas = series(css,javascript,minificarHTML);
// Por defecto. Se inicia con GULP en consola
// exports.default = series(css,javascript,minificarHTML);


// Parallel. Hace las funciones en paralelo.
exports.default = parallel(css,javascript,minificarHTML);