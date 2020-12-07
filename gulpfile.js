let {src,dest,watch} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
    // concat = require('gulp-concat'),
    // babel = require('gulp-babel'),
let uglify = require('gulp-uglify');
    // imagemin = require('gulp-imagemin'),
let  cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
//创建任务
function fnCopyIndex(){
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
//js
function fnJS(){
    return src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(dest('./dist/js'));
}
//css
function fnCSS(){
    return src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(dest('./dist/css'));
}
//img
function fnImg(){
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}
//page
function fnPage(){
    return src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/pages'));
}
//事件监听
function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/js/*.js',fnJS);
    watch('./src/sass/*.scss',fnCSS);
    watch('./src/pages/*.html',fnPage);
}
//导出任务
exports.index = fnCopyIndex;
exports.js = fnJS;
exports.css = fnCSS;
exports.img = fnImg;
exports.page = fnPage;
exports.default = fnWatch;
