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

# JSON Server FAKE API

Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

sudo npm install json-server -g

- Cargar el json : 
``` JavaScript
json-server initalState.json
```

# Error al actualizar a NODE 12 cuando la version de tu codigo era 8

> Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x

 npm rebuild node-sass
