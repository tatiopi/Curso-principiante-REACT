* npm install react react-dom

- agregar compatibilidad con todos los navegadores usando Babel
    * npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    - añadir un pequeño archivo de configuracion en la raiz : .babelrc

# Configurar webpack

* npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev

- Vamos a crear un nuevo archivo de configuracion para webpack webpack.config.js
- añadimos a package.json una entrada nueva en la seccion de scripts :
    * "build": "webpack --mode production"