// review the api to try to not need this
// import 'web-animations-js/web-animations-next.min.js';
import { LitElement, html } from '@polymer/lit-element/lit-element';
import { installRouter } from 'pwa-helpers/router';
import { routes, navigate, generatePageTransitionAnimation, generateHeroTransitionAnimation, generateBaseLoadAnimation} from './app';

// Create your custom component
class AppShell extends LitElement {
  // Initialize properties

  constructor() {
    super();
    
    installRouter((location, event) => this.viewChange(location, event));
    this.currentLocation = location.pathname;
  }

  async viewChange(location, event) {
    if (!this.currentLocation) {
      await navigate(window.decodeURIComponent(location.pathname));
      const firstView = this.shadowRoot.querySelector(routes[location.pathname].selector);
      generateBaseLoadAnimation(firstView, 'forwards');
      firstView.classList.add('active');
      return;
    }
    
    const oldView = this.shadowRoot.querySelector(routes[this.currentLocation].selector);
    // const fromNode = oldView.shadowRoot.querySelector('div');
    // generatePageTransitionAnimation(oldView, 'backwards');
    // toss up a spinner
    await navigate(window.decodeURIComponent(location.pathname));
    oldView.classList.remove('active');
    // this.currentLocation = location.pathname;
    
    const newView = this.shadowRoot.querySelector(routes[location.pathname].selector);
    // const toNode = newView.shadowRoot.querySelector('div');
    // generateHeroTransitionAnimation(toNode, fromNode, newView, oldView);
    // generatePageTransitionAnimation(newView, 'forwards');
    newView.classList.add('active')
  }

  renderLink(route) {
    return html`
    <a href="${route.url}">
      ${route.label}
    </a>`;
  }
  
  render() {
    return html`
    <style>
      :host {
        display: grid;
        grid-template-rows: 2rem 1fr;
        height: 100%;
      }

      a {
        cursor: pointer;
      }

      main {
        position: relative;
      }

      main > * {
        display: block;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        top: 0;
        left: 0;
      }

      .active {
        pointer-events: auto;
        opacity: 1;
      }
    </style>
    <nav>
      ${Object.keys(routes).map(i => this.renderLink(routes[i]))}
    </nav>
    <main>
      <home-page></home-page>
      <about-page></about-page>
      <not-found></not-found>
    </main>
    `;
  }
}
// Register the element with the browser
customElements.define('app-shell', AppShell);