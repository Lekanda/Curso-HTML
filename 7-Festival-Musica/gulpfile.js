const {series,src, dest,watch,parallel} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');



function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

// Minificar imagenes (Reducir peso de imagen)
function imagenes() {
    // Lee todas las imagenes que esten ahi(src/img)
    return src('src/img/**/*')
        // Minifica la imagen.
        .pipe(imagemin())
        // Destino de img minificada.
        .pipe(dest('./build/img'))
        // Notificacion de imagen Minifacada.
        .pipe(notify({message:'Imagen Minificada'}));
}





function watchArchivos() {
    watch('src/scss/**/*.scss', css);
}
/*
    - * = La carpeta actual. src/scss/*.scss
    - ** = Todos los archivos con esa extension. 
*/

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

// queremos que watchArchivos y imagenes se esten ejcutando todo el tiempo. Con Default
exports.default = series(css, imagenes,watchArchivos);

