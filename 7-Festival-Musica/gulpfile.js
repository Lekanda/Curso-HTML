const {series,src, dest,watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');



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
        .pipe(imagemin())
        .pipe(dest('./build/img'))
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