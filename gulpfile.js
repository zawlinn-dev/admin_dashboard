const { src, dest, watch, series } = require('gulp')

const sass = require('gulp-sass') (require('sass'))

function buildStyles(){

    return src('./src/**/*.sass')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask(){

    watch(['main.sass'], buildStyles)
}

exports.default = series(buildStyles, watchTask)