import * as components from './components/card/indexPadre.js';
import  {dataCards } from './data/characters.js'
class AppContainer extends HTMLElement { /// PO, herencia, HTMLELEMNT es el papa que tine meodos y los hereda, se heredan elemntos del html. 
    constructor() {
        super(); //Iniicslizar los metodos heredados
        this.attachShadow({ mode: 'open' });// Encapsular el código y permitir que el DOM encuentre nuestra nueva clase
        dataCards.forEach((element))
    }

    // Cuando el componente se carga en el DOM hace lo que le indiquemos
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        
        `;
    }
}

customElements.define('app-container', AppContainer);

// modo abierto, incluir una nueva clase, incluir en el DOM