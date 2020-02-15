* npm install react react-dom

- agregar compatibilidad con todos los navegadores usando Babel
    * npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    - añadir un pequeño archivo de configuracion en la raiz : .babelrc

# Configurar webpack

* npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev

- Vamos a crear un nuevo archivo de configuracion para webpack webpack.config.js
- añadimos a package.json una entrada nueva en la seccion de scripts :
    * "build": "webpack --mode production"

# Instalar webpack-dev-server

- npm install webpack-dev-server --save-dev
- Añadir a package.json seccion de scripts
    * "start": "webpack-dev-server --open --mode development"
    * npm run start

# Instalar SASS
- npm i mini-css-extract-plugin css-loader node-sass sass-loader
    * mini-css-extract-plugin : me permite extraer el css del bundle 
- añadimos una nueva regla en el webpackconfig.js

# ESLint 

- npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

- añadimos el archivo .eslintrc para configuracion

# Instalar loader para nuestros archivos

npm install file-loader --save-dev
