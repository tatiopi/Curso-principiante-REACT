# Apuntes varios 

- Si vamos a renderizar HTML usar ()
- Si vamos a renderizar Logica usar {}

- ejemplo en HelloWorld.js

``` JavaScript 
import React from 'react';

const helloWorld = () => (
    <h1>Hola Mundo</h1>
);

export default helloWorld;
``` 
# Crear un contenedor donde tendremos nuestros componentes

Creamos una carpeta llamada containers dentro de src , esta contedra el siguiente codigo

``` javascript
import React from 'react';
import Header from '../components/Header';

const App = () => ( <div className = "App">
        <Header/>
    </div>
);
```

App nos ayudara a estructurar nuesrtos componentes