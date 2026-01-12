# GULP

- É muito importante citar que nas versões mais recentes do gulp-sass o compilador sass não é inserido em conjunto, tendo que ser baixado individualmente, ou seja `npm install sass --save-dev` ou `npm install node-sass --save-dev`
```
// Mensagem do proprio gulp sobre
gulp-sass no longer has a default Sass compiler; please set one yourself.
Both the "sass" and "node-sass" packages are permitted.
For example, in your gulpfile:
const sass = require('gulp-sass')(require('sass'));

gulp-sass não tem mais um compilador Sass padrão; defina um você mesmo.
Ambos os pacotes "sass" e "node-sass" são permitidos.
Por exemplo, no seu gulpfile:
const sass = require('gulp-sass')(require('sass'));
```