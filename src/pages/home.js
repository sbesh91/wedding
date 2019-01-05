import { LitElement, html } from '@polymer/lit-element/lit-element';
import { generateHeroOverlayAnimation, generatePageTransitionAnimation } from '../app';
import { ripple } from '@material/mwc-ripple';

// import * as animateCSSGrid from 'animate-css-grid';

// Create your custom component
class HomePage extends LitElement {
  // Initialize properties
  constructor() {
    super();
    this.images = [];
    for (let i = 1; i < 25; i++) {
      this.images.push(i);
      (async () => {
        await import(`./../photos/${i}.jpg`);
      })
    }
  }

  firstUpdated() {
    // this.grid = this.shadowRoot.querySelector('#grid');
    // animateCSSGrid.wrapGrid(this.grid, { duration: 300, stagger: 10, easing: 'easeInOut' });
  }

  clickRsvp(e) {
    generateHeroOverlayAnimation(this.shadowRoot.querySelector('#form'), e.target, this.shadowRoot.querySelector('#grid'));
  }

  close(e) {
    const form = this.shadowRoot.querySelector('#form');
    const grid = this.shadowRoot.querySelector('#grid');
    generatePageTransitionAnimation(form, 'backwards');
    form.style.pointerEvents = 'none';
    grid.style.opacity = 1;
    grid.style.filter = 'none';
  }

  getCardClass(index) {
    // const rand = Math.floor(Math.random() * 4);
    const classes = ['card--base', 'card--base', 'card--expanded', 'card--base', 'card--base'];
    // return classes[rand];
    return classes[index % 5];
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        width: 100%;
      }
      #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: .5rem;
        grid-auto-flow: dense;

        padding: 1rem;
        min-height: 100vh;
        transition: 300ms opacity ease;
      }
      #form {
        background: white;
        border-radius: 4px;
        box-shadow: 0 3px 6px rgba(114,47,55,0.16), 0 3px 6px rgba(114,47,55,0.23);
        position: fixed;
        top: calc(50% - 250px);
        left: calc(50% - 160px);
        height: 500px;
        width: 320px;
        pointer-events: none;
        opacity: 0;
      }
      #rsvp {
        grid-column: 1 / -1;
        grid-row: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        /* position: relative; */
      }
      #rsvp div {
        width: 18rem;
        height: 8rem;
        font-size: 5rem;
        line-height: 5rem;
        color: #616161;
        border-radius: 4px;
        border: none;
        box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
        background-image: linear-gradient(90deg, #c3922e 0%, #eed688 40%, #fffbcc 80%, #eed688 100%);
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .card--expanded {
        grid-column: span 2;
        grid-row: span 2;
      }

      @media only screen and (max-width: 600px) {
        .card--expanded {
          grid-column: span 1;
          grid-row: span 1;
        }
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
        width: 100%;
      }
    </style>


    <section id="grid">
      <div id="rsvp">
        <div @click="${(e) => this.clickRsvp(e)}">
          <mwc-ripple></mwc-ripple>
          RSVP
        </div>
      </div>

      ${this.images.map(i => html`
        <main class="${this.getCardClass(i)}"> 
          <img src="./src/photos/${i}.jpg">
        </main>
      `)}      
    </section>
    <div id="form">
      <span>
        some form here
      </span>
      <button @click="${(e) => this.close(e)}">close</button>
    </div>
    `;
  }
}
// Register the element with the browser
customElements.define('home-page', HomePage);