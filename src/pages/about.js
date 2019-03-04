import { LitElement, html } from 'lit-element/lit-element';
import people from './people.json';
import party from './party.json';

// Create your custom component
class AboutPage extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  renderPerson(person) {
    return html`
    <div class="person">
      <h4>${person.name}</h4>
      <h5>Code Name: ${person.tag}</h5>
      <p>${person.bio}</p>
    </div>
    `;
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        width: 100%;
      }
      .content {
        max-width: 800px;
        padding: 2rem 1rem;
        margin: 2rem auto;
        background: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        min-height: 600px;
      }
      h3 {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      h4 {
        font-size: 1.3rem;
        line-height: 1.3rem;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      h5 {
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      p {
        font-size: .9rem;
        line-height: 1rem;
        margin: 0;
      }
      span {
        display: block;
        font-size: 1rem;
        line-height: 1.4rem;
        margin: .5rem 1rem;
      }
      a {
        display: inline-block;
        font-size: .95rem;
        line-height: 1rem;
        margin-right: .5rem;
      }
      iframe {
        display: block;
      }
      p, h3, h4, h5, span, a, .block {
        color: #616161;
      }

      .block {
        max-width: 700px;
        margin: 1rem auto;
        padding-top: 4.25rem;
      }

      #grid {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      }

      .person h5 {
        margin: 1rem 0;
      }

      .title {
        border-bottom: 1px solid rgba(0,0,0,0.23);
        margin-bottom: .5rem;
        padding-bottom: .5rem
      }
    </style>
    <div class="content">
      <div class="block">
        <h3>
          Welcome to the Beshensky and Thibeau Wedding!
        </h3>
        <span>Here, have some quick links to stuff</span>
        <span>
          <a href="#location" no-nav>Location</a>
          <a href="#times" no-nav>Times</a>
          <a href="#registry" no-nav>Registry</a>
          <a href="#faq" no-nav>FAQ</a>
          <a href="#people" no-nav>People</a>
        </span>
      </div>
      <div id="location" class="block">
        <h4>Location</h4>
        <span>
          Stoughton Country Club
          3165 Shadyside Dr, Stoughton, WI 53589
        </span>
        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=3165%20Shadyside%20Dr%2C%20Stoughton%2C%20WI%2053589+(Stoughton%20Country%20Club)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      <div id="times" class="block">
        <h4>Times</h4>
        <span>
          
        </span>
      </div>
      <div id="registry" class="block">
        <h4>Registry</h4>
        <span>
          We’ve got everything we need for our home, so please don’t get us any toasters or dishes or towels. Instead, contribute to our Honeymoon Fund! We’ll also have a donation box at our reception for cash gifts.
          <a href="https://www.zola.com/registry/beshenskythibeau" target="_blank">
            Registry
          </a>
        </span>
      </div>
      <div id="faq" class="block">
        <h4>FAQ</h4>
        <h4>
          When are RSVPs due?
          <span>
            Please RSVP by XX/XX/XXXX to make sure we save your seat! If you can’t make it, please let us know. If we don’t hear from you, we’ll just assume you hate us.
          </span>
        </h4>
        <h4>
          Can I bring my kids?
          <span>
            Only kids at heart! Trust us, we love your kids, but we want you to party with us without having to keep track of your kids all night (you totally deserve a break). And we’re not providing babysitters at the venue.
          </span>
        </h4>
        <h4>
          Can I bring a date?
          <span>
            If your invitation says “and Guest,” feel free! If not, we can’t afford to feed an extra person, so they’ll have to stay home.
          </span>
        </h4>
        <h4>
          What's the dress code?
          <span>
            Suggestions for Ladies: dress, skirt and a nice top, dress pants and a blouse, dressy jumpsuit, you get it. Look fabulous (but not as fabulous as Ashley!)
            <br/>
            Suggestions for Men: suit and tie, slacks and button up, clean pants and your best collared shirt that doesn’t have a stain on it... good enough!
            What Not to Wear:
            <br/>
            1. Obviously, don’t wear white 
            <br/>
            2. Jeans and T-shirts are a NO and leave those cargo shorts at home!! 
            <br/>
            3. Don’t dress like you’re going out to the club 
            <br/>
            4. Our bridesmaids are wearing long, wine/burgundy colored dresses and the groomsmen are in blue suits, so it would be best to try not to match them!
          </span>
        </h4>
        <h4>
          You said you don’t want gifts, but...?
          <span>
            If it’s a handmade gift or something super special and personal, we’d love it! If it’s a plain old gift from a store, we’d rather you donate toward our European excursion. And if you can’t afford a gift, we totally understand. It means more to us that you can just spend the evening with us.
          </span>
        </h4>
        <h4>
          I have so many more questions about the wedding, who am I gonna call??
          <span>
            Ghostbusters! ...Or just Steve (414) 324-3801 and Ashley (715) 892-9436
          </span>
        </h4>
      </div>
      <div id="people" class="block">
        <h3>
          Who's Who
          <span>Wait... who the HECK are these people??</span>
        </h3>
        <div id="grid">
          ${people.map(i => this.renderPerson(i))}
          <div class="title">
            <h4>The Best Ladies</h4>
          </div>
          <div class="title">
            <h4>The Best Men</h4>
          </div>
          ${party.map(i => this.renderPerson(i))}
        </div>
      </div>
    </div>`;
  }
}
// Register the element with the browser
customElements.define('about-page', AboutPage);