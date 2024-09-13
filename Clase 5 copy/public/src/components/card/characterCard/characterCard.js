class CharacterCard extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'name', 'gender'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/card/card/card.css">
    <h1>${this.name || 'No tiene nombre'}</h1>
    <p>${this.gender || 'No tiene nombre'}
    <img src="${this.image}"></img>
`;

    }
}

customElements.define('character-card', CharacterCard);
export default CharacterCard;