import React from 'react';

// **** ESTA PARTE ES STATELESS *******
// Vamos a crear un stateless
// Le estamos indicando que recibe una propiedad como parametro
// si vamosa index.js vemos que se usa este compoente de la 
// siguiente forma :
// ReactDOM.render(<Button text="click 2"/> , document.getElementById('root'));
// la 'prop' es text 
// const Button = props => {
//     // de esta forma podemos extraer de las propiedades los elementos que queramos
//     // imaginemos que aparte de text tambien tiene una propiedad input puedes podriamos 
//     // sacarla de la siguiente manera const { text , input } = props ;
//     const {  text} = props ;
//     return (
//         <div>
//             <button type="button">{props.text}</button>
//             <button type="button">{text}</button>
//         </div>
//     )
// }

// Ahora vamos a convertir esta parte en statefull
// los eventos son en camelCase

class Button extends React.Component {
    state = {
        count : 0 
    };

    handleClick = () => {
        this.setState({
            count : this.state.count + 1 
        })
    } ;
    
    render() {
        const { count } = this.state ;
        return (
            <div>
                <h1>Manzanas : {count}</h1>
                <button onClick={this.handleClick} type="button">Agregar</button>
            </div>
            
        )
    }
}


export default Button;