import { LitElement, html } from 'lit-element/lit-element';

// Create your custom component
class NotFound extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`<p>not found page</p>`;
  }
}
// Register the element with the browser
customElements.define('not-found', NotFound);