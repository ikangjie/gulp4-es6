var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),//监听文件（修改、新建、删除）
    changed = require('gulp-changed'),//仅仅传递更改过的文件
    babel = require('gulp-babel'),//编译es6语法
    browserify = require('gulp-browserify'),//模块打包
    sourcemaps = require('gulp-sourcemaps'),//生成记录位置信息的sourcemaps文件,用于检查文件bug
    htmlmin = require('gulp-htmlmin'),//压缩html
    cssmin = require('gulp-clean-css'),//压缩css
    cssver = require('gulp-make-css-url-version'),//给css文件里引用文件加版本号
    rev = require('gulp-rev-dxb'),//生成版本号清单
    revCollector = require('gulp-rev-collector-dxb'),//替换成版本号文件
    uglify = require('gulp-uglify'),//js压缩
    jshint = require('gulp-jshint'),//js检查 cnpm install --save-dev jshint gulp-jshint
    imagemin = require('gulp-imagemin'),//图片压缩
    spritesmith = require('gulp.spritesmith'),//图片合成
    pngquant = require('imagemin-pngquant'),
    sass = require('gulp-sass');//sass编译

gulp.task('connect',function(done){
    connect.server({
        livereload: true,
        port: 8081
    });
    done();
});

gulp.task('css',function(){
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(cssver())
    .pipe(cssmin())
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))   
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css'))
    .pipe(connect.reload());
});

gulp.task('js',function(){
    return gulp.src('src/js/**/*.js')
    .pipe(changed('es6'))
    .pipe(babel())
    .pipe(gulp.dest('es6'))
    .pipe(connect.reload());
});

gulp.task('browserify', function() {
    return gulp.src('es6/*.js', { read: false })
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(jshint())
        .pipe(uglify())        
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'))        
        .pipe(connect.reload());
});

gulp.task('sprites',function(){
    return gulp.src('src/sprites/**/*.{png,jpg}')
    .pipe(spritesmith({
        imgName: '../images/sprites.png',//生成的图片
        cssName: '../sass/sprites.scss',//生成的sass文件
        padding: 0,//图标之间的距离
        algorithm: 'binary-tree'//图标的排序方式
    }))
    .pipe(gulp.dest('src/sass/'))
    .pipe(connect.reload());
});

gulp.task('image',function(){
    return gulp.src('src/images/**/*.{png,jpg,gif,ico}')
    .pipe(rev())
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}], //不要移除svg的viewbox属性
        use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
    }))
    .pipe(gulp.dest('dist/images'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/images'))
    .pipe(connect.reload());
});

gulp.task('rev',function() {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: false,//压缩HTML
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true//删除<style>和<link>的type="text/css"      
    };    
    return gulp.src(['rev/**/*.json', 'src/**/*.html'])
    .pipe(revCollector({
        replaceReved: true, //允许替换, 已经被替换过的文件  
        dirReplacements: {
            'css': 'css',
            'js': 'js',
            'images': 'images'
        }            
    }))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch',function(done){
    gulp.watch('src/images/**/*.{png,jpg,gif,ico}',gulp.series('image'));
    gulp.watch('src/sprites/**/*.{png,jpg}',gulp.series('sprites'));
    gulp.watch('src/sass/**/*.scss',gulp.series('css'));
    gulp.watch('src/js/**/*.js',gulp.series('js'));
    gulp.watch('es6/**/*.js',gulp.series('browserify'));
    gulp.watch(['rev/**/*.json','src/**/*.html'],gulp.series('rev'));
    done();
});

gulp.task('default',gulp.series(gulp.parallel('connect','watch','image','sprites','css','js','browserify','rev')));