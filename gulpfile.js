// Grab gulp package
var gulp = require('gulp'); // standard
var header = require('gulp-header'); // standard
var runSequence = require('run-sequence');
var notify = require("gulp-notify"); // Notifications
var insert = require('gulp-insert'); // Wrap file in get_header and get_footer
var replace = require('gulp-replace'); // replace text in file
var htmlsplit = require('gulp-htmlsplit'); // Split html with Header and Footer
var del = require('del');



var pkg = require('./package.json');
var banner = ['/*',
  'Theme Name: <%= pkg.name %>',
  'Theme URI: -',
  'Author: <%= pkg.author %>',
  'Author URI: -',
  'Description: <%= pkg.description %>',
  'Version: <%= pkg.version %>',
  '*/',
  ''].join('\n');

// Do stuff
gulp.task('create-stylecss', function() {
  return gulp.src('./src/style.css')
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('../wordpress'));
});



  // Do stuff after 'create-stylecss' is done
gulp.task('replace', function(){
//  gulp.src(['../html/sass/style.scss'])
//  .pipe(gulp.dest('../wordpress/stylesheets'));

  // Replace TEMPLATENAME with actuall template name
  gulp.src(['./src/functions.php'])
  .pipe(replace('TEMPLATENAME', pkg.name))
  .pipe(gulp.dest('../wordpress'));

  return gulp.src(['../html/*.html'])
  // Add get_template_directory_uri to links
  .pipe(replace('src="img/', 'src="<?php echo get_template_directory_uri(); ?>/img/'))
  .pipe(replace('src="js', 'src="<?php echo get_template_directory_uri(); ?>/js'))

  // Change stylesheets/main.css path to css/main.css and add version numbering
  .pipe(replace("stylesheets/style.css", "<?php echo get_template_directory_uri().'/stylesheets/style.css?v='.filemtime( get_template_directory().'/stylesheets/style.css');?>"))

  // Add wp_head and wp_footer
  .pipe(replace(/<title>.{0,}<\/title>/, '<title><?php wp_title(); ?></title>'))
  .pipe(replace('</head>', '<?php wp_head(); ?> ' + '\n' + '  </head>'))
  .pipe(replace('</body>', '<?php wp_footer(); ?> ' + '\n' + ' </body>'))
  // Console Message
  .pipe(notify("<%= file.relative %> is now completely changed!"))
  .pipe(gulp.dest('../html/tmp'));
});



// Split index.html into[ Header.php, Footer.php, Index.php ]
gulp.task('build-prod', function() {
  return gulp.src('../html/tmp/*.html')
    .pipe(htmlsplit())
    .pipe(gulp.dest('../wordpress'))
  // Console Message
    .pipe(notify("<%= file.relative %> is now located in the Wordpress folder!"));

})



// Do stuff after 'templates' is done
gulp.task('copy-files', function () {
  // Get css from Automating Template
  gulp.src(['./src/**/*', '!./src/style.css', '!./src/functions.php']).pipe(gulp.dest('../wordpress'));
    // Get files from dist (fonts, images, scripts)
  gulp.src(['../html/**/*', '!../html/*.html', '!../html/stylesheets/**/*.css', '!../html/*.ico', '!../html/*.png', '!../html/robots.txt']).pipe(gulp.dest('../wordpress'));
    // Get scss files
  gulp.src(['../html/sass/**/*', '!../html/sass/style.scss']).pipe(gulp.dest('../wordpress/sass'));
    // Get bootstrap scss
  //gulp.src('../html/bower_components/bootstrap-sass/assets/stylesheetsheets/**/*').pipe(gulp.dest('../wordpress/stylesheets/assets/'));
  //.pipe(notify("Fonts, images, scripts, ect, are now in your wordpress theme!"));
});



// Add <?php get_header(); ?> & <?php get_footer();?>
gulp.task('wrap', function(){
  return gulp.src(['../wordpress/*.php', '!../wordpress/functions.php', '!../wordpress/header.php', '!../wordpress/footer.php'])
  .pipe(insert.wrap('<?php get_header(); ?>' + '\n', '\n' + '<?php get_footer();?>'))
  // Console Message
  .pipe(notify("<%= file.relative %> is now wrapped by get_header and get_footer"))
  .pipe(gulp.dest('../wordpress'));
});

gulp.task('finish', function(){
  // Console Message
  return gulp.src(['../wordpress']).pipe(notify("Your Wordpress Template for " + pkg.name + " is now ready!"));
});

gulp.task('start', function() {
  runSequence(
    'create-stylecss',
    'replace', // Do stuff after 'create-stylecss' is done
    'build-prod', // Split index.html into[ Header.html, Footer.html, Index.html ]
    'copy-files', // Do stuff after 'templates' is done
    'wrap', // Add <?php get_header(); ?> & <?php get_footer();?>
    'finish' // Showing a message saying sequence is done
  );
});

//gulp-replace
// ** bootstrap path in main.scss
// ** css path in index.html
