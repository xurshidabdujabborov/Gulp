var gulp = require('gulp'); 
var autoprefixer = require('gulp-autoprefixer');  
var csso = require('gulp-csso');                   
var rename = require("gulp-rename");                
var gcmq = require('gulp-group-css-media-queries');  
var watch = require('gulp-watch');                    
var browserSync = require('browser-sync').create();    
var plumber = require('gulp-plumber');                  
var sourcemaps = require('gulp-sourcemaps');           
var less = require('gulp-less');                       

gulp.task('style', style)

function style () {
    return gulp.src('./app/less/style.less')   
    .pipe(sourcemaps.init())           
    .pipe(plumber())                 
    .pipe(less())                       
    .pipe(autoprefixer({         
        browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
        cascade: false
    }))
    .pipe(gcmq())                              
    .pipe(gulp.dest('./app/css'))
    .pipe(csso())                     
    .pipe(rename({                     
        suffix: ".min",
      })) 
    .pipe(sourcemaps.write('.'))          
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());        
}

gulp.task('watch', function () {                
    watch("./app/less/**/*.less", style);        
    watch("./app/index.html", browserSync.reload);              
    watch("./app/js/script.js", browserSync.reload);              
    watch("./app/img/*.*", browserSync.reload);             
})

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        notify: true,
        port: 9000
    });
})

gulp.task("default", gulp.parallel("style","watch", "server"));
