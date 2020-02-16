import React , { useState , useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

// useEffect : Peticiones API o eventos de nuestros componentes , cambios de estados...
// useState  : Manejar estados
// Este componente tiene un retorno explicito (por eso va entre parentesis)
// por vamos a cambiarlo , le añado una llave de inicio y otra final {  } y ademas un return
// const App = () => {return (.....)}

// El Hook useState nos devuelve un array con dos elementos: la primera posición es 
// el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

const App = () => { 
    // recibe como propiedad elementos para inicializar mi estado
    // pueden ser string , number , boolean , object o arreglos

    //El argumento que enviamos a esta función (useState(ARGUEMNTO)) es el valor 
    // por defecto de nuestro estado (initial state).
    const [ videos , setVideos ] = useState({mylist : [] , trends : [] , originals : []});

    // Lo de arriba seria lo equivalente a usar lo siguiente :
    // class XXX extends React.Component
    //      constructor(props)
    //      {
    //          super(props);
    //          this.state = {
    //              videos: []
    //          }
    //      }
    //      ... 
    //      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    // }

    // El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. 
    // Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.
    // El segundo argumento es un array donde podemos especificar qué propiedades deben
    // Ecambiar para que React vuelva a llamar nuestro código. 
    // Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

    // Por defecto, cuando no enviamos un segundo argumento, 
    // React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen
    // Si esta vacio solo se ejecutara cuando monta o desmontar
    useEffect(()=>{
        fetch('http://localhost:3000/initalState')
            .then(response => response.json()
            .then(data => {
                setVideos(data)
            })
        )
    },[]);

    return ( 
    <div className = "App">
        <Header/>
        <Search/>
        {videos.mylist.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
        }
        <Categories title="Tendencias">
            <Carousel>
                { videos.trends.map(item => 
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>

        <Footer/>
    </div>
    );
}

export default App;
