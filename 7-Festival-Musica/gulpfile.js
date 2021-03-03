const {src, dest} = require('gulp');
const sass = require('gulp-sass');

// Funcion para compilar SASS

/* 
- expanded: vista mas expandida.
- compressed: vista minificada
*/


function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}


exports.css = css;
exports.minificarcss = minificarcss;

