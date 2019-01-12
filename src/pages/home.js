import { LitElement, html } from 'lit-element/lit-element';
import { generateHeroOverlayAnimation, generatePageTransitionAnimation, generateFlipAnimation } from '../app';
import '@material/mwc-ripple';
import '@polymer/iron-form/iron-form';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-radio-group/paper-radio-group';
import '@polymer/paper-radio-button/paper-radio-button';
import 'intersection-observer/intersection-observer';

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

  rsvpChange(e) {
    const value = e.target.value;
    if (value === 'yes' && value !== this.rsvp) {
      generateFlipAnimation(this.shadowRoot.querySelector('.food-options .frontface'));
      generateFlipAnimation(this.shadowRoot.querySelector('.food-options .backface'), 'backwards');
    } else if (value === 'no' && value !== this.rsvp && this.rsvp) {
      generateFlipAnimation(this.shadowRoot.querySelector('.food-options .frontface'), 'backwards');
      generateFlipAnimation(this.shadowRoot.querySelector('.food-options .backface'));
    }

    this.rsvp = value;
  }

  close(e) {
    const form = this.shadowRoot.querySelector('#form');
    const grid = this.shadowRoot.querySelector('#grid');
    generatePageTransitionAnimation(form, 'backwards');
    form.style.pointerEvents = 'none';
    grid.style.opacity = 1;
    grid.style.filter = 'none';

    const ironForm = this.shadowRoot.querySelector('iron-form');
    ironForm.reset();
    generateFlipAnimation(this.shadowRoot.querySelector('.food-options .frontface'), 'backwards');
    generateFlipAnimation(this.shadowRoot.querySelector('.food-options .backface'));
    this.rsvp = undefined;
  }

  async submit(e) {
    const ironForm = this.shadowRoot.querySelector('iron-form');
    const form = ironForm.querySelector('form');

    if(ironForm.validate()) {

      this.close(e);
    } else {
      console.log('invalid form')
    }
    

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
        grid-auto-rows: minmax(1fr, auto);
        grid-gap: .5rem;
        grid-auto-flow: dense;

        padding: 1rem;
        min-height: 100vh;
        transition: 300ms opacity ease;
      }

      #form {
        background: white;
        z-index: 10000;
        border-radius: 4px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        position: fixed;
        top: 25vh;
        left: calc(50% - 160px);
        height: 500px;
        width: 320px;
        pointer-events: none;
        opacity: 0;
        padding: 1rem;
      }

      #rsvp {
        grid-column: 1 / -1;
        grid-row: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #rsvp div {
        width: 18rem;
        height: 5rem;
        font-size: 3rem;
        line-height: 3rem;
        color: #616161;
        border-radius: 4px;
        border: none;
        box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
        background-image: var(--button-style);
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      iron-form, form {
        height: 100%;
      }

      form {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 4rem 3rem 16rem 1fr;
      }

      .input paper-input {
        --paper-input-container: {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
        }
      }

      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      .submit paper-button {

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
        opacity: 1;
        /* transform: scale(.9, .9); */
        transition: 300ms ease;
      }

      img.active {
        opacity: 1;
        /* transform: scale(1, 1); */
      }

      .food-options {
        position: relative;
      }

      .food-options .frontface,
      .food-options .backface {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        background: rgba(255, 255, 255, .5);
      }

      .food-options .frontface {
        transform: rotateY(180deg);
      }

      .food-options .backface {
        opacity: 1;
        filter: blur(5px);
      }

      paper-input {
        --paper-input-container-focus-color: var(--primary);
      }
      paper-radio-button {
        --paper-radio-button-checked-color: var(--primary);
        --paper-radio-button-checked-ink-color: var(--primary);
      }
    </style>
    <div id="form">
      <iron-form>
        <form method="GET" action="https://script.google.com/macros/s/AKfycbwhPhp2d6x0lhYi7vkEGNJOONuIHngT-GZn_BAqudk-vJegxksE/exec">
          <div class="input">
            <paper-input name="name_one" label="Respondent One" required></paper-input>
          </div>
          <div class="input">
            <paper-input name="name_two" label="Respondent Two" placeholder></paper-input>  
          </div>
          <div>
            <div>
              Will you be joining us for the night?
            </div>
            <paper-radio-group @change="${(e) => this.rsvpChange(e)}">  
              <paper-radio-button name="rsvp_yes" value="yes">Yes</paper-radio-button>
              <paper-radio-button name="rsvp_no" value="no">No</paper-radio-button>
            </paper-radio-group>
          </div>
          
          <div class="food-options">
            <div class="frontface">
              <div class="input">
                <paper-input name="dinner_one" label="" placeholder></paper-input>
              </div>
              <div class="input">
                <paper-input name="dinner_two" label="" placeholder></paper-input>
              </div>
            </div>
            <div class="backface">
              <div class="input">
                <paper-input name="dinner_one" label="" placeholder></paper-input>
              </div>
              <div class="input">
                <paper-input name="dinner_two" label="" placeholder></paper-input>
              </div>
            </div>
          </div>


          <div class="submit">
            <paper-button @click="${(e) => this.close(e)}">Close</paper-button>
            <paper-button @click="${(e) => this.submit(e)}">Submit</m-button>
          </div>
        </form>
      </iron-form>
    </div>
    <section id="grid">
      <div id="rsvp">
        <div @click="${(e) => this.clickRsvp(e)}">
          <mwc-ripple></mwc-ripple>
          RSVP
        </div>
      </div>

      ${this.images.map(i => html`
        <main class="${this.getCardClass(i)}"> 
          <img data-toggle-class="active" src="./src/photos/${i}.jpg">
        </main>
      `)}      
    </section>
    `;
  }
}
// Register the element with the browser
customElements.define('home-page', HomePage);