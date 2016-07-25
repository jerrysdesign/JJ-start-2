import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import { join } from 'path';
import { src, dest } from './config';

gulp.task('pug', () => {
gulp.src(join(src, 'pug', '*.pug'))
  .pipe(plumber())
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(join(src, 'html')));
});
