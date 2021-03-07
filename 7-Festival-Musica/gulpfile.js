const {series,src, dest,watch} = require('gulp');
const sass = require('gulp-sass');

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

function watchArchivos() {
    watch('src/scss/**/*.scss', css);
}
/*
    - * = La carpeta actual. src/scss/*.scss
    - ** = Todos los archivos con esa extension. 
*/

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;