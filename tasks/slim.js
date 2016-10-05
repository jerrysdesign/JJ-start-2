import gulp from 'gulp';
import slim from 'gulp-slim';
import plumber from 'gulp-plumber';
import { join } from 'path';
import { src, dest } from './config';

gulp.task('slim', () => {
gulp.src(join(src, 'slim', '*.slim'))
  .pipe(plumber())
  .pipe(slim({
    pretty: true
  }))
  .pipe(gulp.dest(join(src, 'html')));
});
