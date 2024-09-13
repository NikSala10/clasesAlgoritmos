class CounterButton extends HTMLElement {
    

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
    }

   incrementCount()  {
    this.count ++;
    this.render();
   }


    render() {
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/card/card/card.css">
    <button>Counter: ${this.count}</button>
`;

    this.shadowRoot.querySelector('button').addEventListener('click', () => this.incrementCount);

    }
}

customElements.define('character-card', CounterButton);
export default CounterButton;