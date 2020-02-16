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
// En index.js
import React from 'react';
import Header from '../components/Header';

const App = () => ( <div className = "App">
        <Header/>
    </div>
);
```

App nos ayudara a estructurar nuesrtos componentes

# Pasar un componente como props 

``` javascript

import React from 'react';

// aqui estoy desestructurando a este componente se le pasa otro componente
const Carousel = ({children}) => (
    <section class="carousel">
    <div class="carousel__container">
        {children}
    </div>
    </section>
);

export default Carousel;

```

¿Como es en App.js el pasar este componente de arriba?

``` javascript
const App = () => ( <div className = "App">
        <Header/>
        <Search/>
        <Categories>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
    </div>
);

```

# Uso de HOOKS

## Sin usar hooks 

``` javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## Usando hooks 

Basicamente para poder usarlo en forma de funcion sin tener que usar una clase

``` javascript
import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
````