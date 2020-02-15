import React from 'react';
import ReactDOM from 'react-dom';
//import HelloWorld from './components/HelloWorld';
import App from './containers/App';

// le digo con el metodo render que componente quiero renderizar 
// en nuestro caso HelloWorld y donde lo quiero insertar , en nuestro
// caso la etique app de nuestro index.html
ReactDOM.render( <App/> , document.getElementById('app'));