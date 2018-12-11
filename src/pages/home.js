import { LitElement, html } from '@polymer/lit-element/lit-element';
import * as animateCSSGrid from 'animate-css-grid';

// Create your custom component
class HomePage extends LitElement {
  // Initialize properties
  constructor() {
    super();
    this.images = [];
    for (let i = 1; i < 10; i++) {
      this.images.push(i);
      (async () => {
        await import(`./../photos/${i}.jpg`);
      })
    }
  }

  firstUpdated() {
    this.grid = this.shadowRoot.querySelector('#grid');
    animateCSSGrid.wrapGrid(this.grid, { duration: 300, stagger: 10, easing: 'easeInOut' });
  }

  clickImage(e) {
    if (e.target.classList.contains('card--expanded')) {
      e.target.classList.remove('card--expanded');
    } else {
      e.target.classList.add('card--expanded');
    }
  }

  getCardClass() {
    const rand = Math.floor(Math.random() * 4);
    const classes = ['card--wide', 'card--expanded', 'card--base', 'card--base'];
    return classes[rand];
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        width: 100%;
      }
      div {
        height: 2rem;
        width: 2rem;
        background: black;
        position: absolute;
        left: 3rem;
        top: 10rem;
      }
      #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-auto-rows: 12rem;
        grid-gap: .5rem;
        grid-auto-flow: dense;

        padding: 1rem;
        min-height: 100vh;
        background: rgba(0,0,0,.8);
      }
      .card--expanded {
        grid-column: span 2;
        grid-row: span 2;
      }
      .card--wide {
        grid-column: span 2;
        grid-row: span 1;
      }
      .card--base {
        grid-column: span 1;
        grid-row: span 1;
      }
      main {
        overflow: hidden;
      }
      img {
        pointer-events: none;
      }
    </style>
    
    <section id="grid">
      ${this.images.map(i => html`
        <main @click="${(e) => this.clickImage(e)}" class="${this.getCardClass(i)}"> 
          <img src="./src/photos/${i}.jpg">
        </main>
      `)}      
    </section>`;
  }
}
// Register the element with the browser
customElements.define('home-page', HomePage);