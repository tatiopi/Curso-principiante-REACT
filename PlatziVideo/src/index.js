import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

// le digo con el metodo render que componente quiero renderizar 
// en nuestro caso HelloWorld y donde lo quiero insertar , en nuestro
// caso la etique app de nuestro index.html
ReactDOM.render( < HelloWorld / > , document.getElementById('app'));