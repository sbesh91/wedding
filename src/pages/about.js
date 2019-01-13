import { LitElement, html } from 'lit-element/lit-element';

// Create your custom component
class AboutPage extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        width: 100%;
      }
      div {
        height: 5rem;
        width: 10rem;
        background: black;
        position: absolute;
        right: 1rem;
        top: 4rem;
      }
    </style>
    <div></div>
    <p>
      about page
    </p>`;
  }
}
// Register the element with the browser
customElements.define('about-page', AboutPage);