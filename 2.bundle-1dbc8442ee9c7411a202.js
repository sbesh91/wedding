(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{45:function(e){e.exports=[{name:"Ashley Thibeau",tag:"Bodacious Bride",bio:"Just a small town girl, livin’ in a lonely wooorrrld... Ashley grew up in Minocqua doing crafts with her mom, bowling with her dad, and playing video games with her little bro. Now she’s all grown up and still loves crafts, bowling, and video games. She’s a Graphic Designer for an indie video game studio and Image Retoucher for the designer clothing retailer called ShopBop."},{name:"Steven Beshensky",tag:"Goofy Groom",bio:"Just a city boy, born and raised in... West Milwaukee! (Okay we’re done with the song references) Steve’s greatest passions in life are video games, sports, and fast cars."},{name:"The Officiant: Jacob Thibeau",tag:"Big Little Bro",bio:"This Video Game Master and World Famous Pancake Chef is also Ashley’s “little” brother. She taught him how to be better at Guitar Hero and he taught her what it’s like to lose every race in Burnout. Whenever they’re together, watch out, because there’s going to be lots of meme references, inside jokes, and ridiculous singing voices."},{name:"Linus The Pupper",tag:"Best Boy",bio:"He is the heckin bestest boy of them all. When he’s not snuggin Mom and Dad, he’s chewin on a bone, chasin a squirrel, or playin ball (no take, only throw.) He also likes to zoom. And boof at birbs. Belly rubs are excellent, but chest scritches are his favorite. He may be smol, but he is very strong and full of love. 16/10 would say “I do” to a lifetime of snuggles and kisses"}]},46:function(e){e.exports=[{name:"Nicole Duhaime",tag:"Honeybunch/Wifey",bio:"In her professional life, Nicole is an Elementary Music Teacher and self-proclaimed Expert Wine Taster. She’s also Ashley’s BFF and partner in crime. They enjoy drinking martinis, wine, and shopping together, but also knitting and naps because they’re the designated grandmas of the friend group."},{name:"David Beshensky",tag:"Daaaaaave",bio:"He's a professional procrastinator.  In his free time, he's studying to become a doctor.  Steven and David played far too much Warcraft 3 as kids and any time they hear \"They came from... behind\" all they can do is laugh."},{name:"Calyssa Byrd",tag:"Calyssasaa",bio:"When she’s not being an incredible human being as a Behavioral Therapist for children with autism, you can find Calyssa teaching Aerial Yoga classes! She’s an aspiring mermaid and Ashley’s go-to-girl for dance moves and surprise tequila shots. They enjoy obsessing over their pets and drinking wine together."},{name:"Thomas Kottke",tag:"Mr. Baker",bio:"Bread. Bread.  Oh the bread.  Thomas and Steve met as college roommates bonded over bread (maybe video games too), but the bread man!  Thomas is a professional dad, engineer, and did I mention the bread?"},{name:"Kaeley Blaney",tag:"Kaerey",bio:"In real life, she’s a Social Worker, but secretly, Kaeley wants to be an Auror investigating crimes related to the Dark Arts... but if that fails, she just wants to be a princess. Whenever a bottle of wine (or three) needs to be emptied, Ashley can always count on Kaeley to help her get the job done."},{name:"Alex Karius",tag:"Carry Us",bio:'"Could you guys... not?"  It wasn\'t the first time we met Karius, but it sealed the deal.  Our friendship, always predicated on magic the gathering, anime, and Dead Space 2.'},{name:"Fortunette Pleasant",tag:"Forchy",bio:"Many, many years before she moved far away to England, Fortunette was a semi-professional All-Star Bowling Champion with Ashley at the Saturday Morning Youth Bowling League. Those days of glory are long gone, but now they enjoy doing artsy fartsy stuff together, sipping tea, and gossipping about the crazy people they went to high school with."},{name:"Alex Dombeck",tag:"Creature",bio:'"Pals" The amount of games they beat is... staggering, but nothing will ever eclipse the feeling of finally beating Bayonetta.  Each time they thought the game was over there would always be a bigger boss to beat.  '},{name:"Natasha Bouchette",tag:"Jelly Bean",bio:"She works with Ashley at ShopBop, but they knew they’d be friends forever the moment they bonded over a weird podcast. Don’t be surprised if you overhear them talking about serial killers because their favorite podcast is My Favorite Murder. They’re also each other’s style gurus, art buddies, and personal therapists."},{name:"Austin Baldwin",tag:"Mom",bio:"He's the man with the plan... and appletinis?  One man, one martini, light on the tini, and a whole lot of them.  What else could you want?"},{name:"Anna Kolbach",tag:"Coffee Queen",bio:"Besides being a Kick-Ass Barista and an Artist, Anna’s third superpower is being a mom. She and Ashley enjoy bonding over being the awkward quiet ones at family gatherings and drinking wine (have you noticed the theme of wine yet??)"},{name:"Matt Kolbach",tag:"Lumberjack",bio:"Long before the age that I started eating food all mixed together (16), Matt had me stay the night at his apartment for the first time.  He made stir fry, and that was the end of it.  I was hooked and there was no looking back."},{name:"Katie Gauthier",tag:"Miss Guathier the Sassy",bio:"She’s one of the world’s greatest Elementary School Teachers, but more importantly, Katie is a Brunch Connoisseur. She’s Ashley’s top choice for getting tipsy on mimosas by the riverfront. They also enjoy baking, dressing up Baby Abby with cute bows, and critiquing their significant others’ fashion choices."},{name:"Eric Boll",tag:"Professor Arithmetic",bio:"Don't you dare do that!  We met in college with both of us working for the university.  Nerd camping wouldn't have been the same without him, and that time in Door County... we just won't talk about that again right?"},{name:"Amber Wildcat",tag:"Ninja",bio:"Don’t be fooled by this quiet girl, she knows how to party! Ashley met Amber the day after she was born and has always been a role model for Amber... so if you think she’s crazy, Ashley is probably the one to blame! They used to play Barbies and smear colorful makeup on each other’s faces, but now they are much more sophisticated ladies."}]},77:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t(45),n=t(46);customElements.define("about-page",class extends o.a{constructor(){super()}renderPerson(e){return o["b"]`
    <div class="person">
      <h4>${e.name}</h4>
      <h5>Code Name: ${e.tag}</h5>
      <p>${e.bio}</p>
    </div>
    `}render(){return o["b"]`
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
        margin-bottom:  1rem;
        padding-bottom: 1rem;
      }
      .title-no-border {
        margin-bottom:  1rem;
        padding-bottom: 1rem;
      }
    </style>
    <div class="content">
      <div class="block">
        <h3>
          Welcome to the Beshensky and Thibeau Wedding!
        </h3>
        <span>Here are some quick links</span>
        <span>
          <a href="#location" no-nav>Location</a>
          <a href="#times" no-nav>Times</a>
          <a href="#registry" no-nav>Registry</a>
          <a href="#hotel" no-nav>Hotel</a>
          <a href="#faq" no-nav>FAQ</a>
          <a href="#people" no-nav>People</a>
        </span>
      </div>

      <div id="location" class="block">
        <h4 class="title">Location</h4>
        <span>
          Stoughton Country Club
          3165 Shadyside Dr, Stoughton, WI 53589
        </span>
        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=3165%20Shadyside%20Dr%2C%20Stoughton%2C%20WI%2053589+(Stoughton%20Country%20Club)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>

      <div id="times" class="block">
        <h4 class="title">Times</h4>
        <span>
          4pm Ceremony (outdoors)
        </span>
        <span>
          Cocktails following the Ceremony
        </span>
        <span>
          6pm Dinner
        </span>
      </div>

      <div id="hotel" class="block">
        <h4 class="title">Hotel</h4>
        <span>
          We have a block reserved under the Beshensky-Thibeau wedding at the Sleep Inn &amp; Suites
        </span>
        <span>
          4802 Tradewinds Parkway, Madison, WI, 53718
        </span>
        <span>
          <a href="https://www.choicehotels.com/reservations/groups/PO54F2" target="_blank">Click here to register your room</a>
        </span>
      </div>

      <div id="registry" class="block">
        <h4 class="title">Registry</h4>
        <span>
          We’ve got everything we need for our home, so please don’t get us any toasters or dishes or towels. Instead, contribute to our Honeymoon Fund! We’ll also have a donation box at our reception for cash gifts.
          <a href="https://www.zola.com/registry/beshenskythibeau" target="_blank">
            Registry
          </a>
        </span>
      </div>
      
      <div id="faq" class="block">
        <h4 class="title">FAQ</h4>
        <h4 class="title-no-border">
          When are RSVPs due?
          <span>
            Please RSVP by 8/28/2019 to make sure we save your seat! If you can’t make it, please let us know.
          </span>
        </h4>
        <h4 class="title-no-border">
          Can I bring my kids?
          <span>
            Only kids at heart! Trust us, we love your kids, but we want you to party with us without having to keep track of your kids all night (you totally deserve a break). And we’re not providing babysitters at the venue.
          </span>
        </h4>
        <h4 class="title-no-border">
          Can I bring a date?
          <span>
            If your invitation says “and Guest,” feel free! If not, we can’t afford to feed an extra person, so they’ll have to stay home.
          </span>
        </h4>
        <h4 class="title-no-border">
          What's the dress code?
          <span>
            Suggestions for Ladies:
            <br/>
            Dress, skirt and a nice top, dress pants and a blouse, dressy jumpsuit, you get it. Look fabulous (but not as fabulous as Ashley!)
          </span>
          <span>
            Suggestions for Men:
            <br/>
            Suit and tie, slacks and button up, clean pants and your best collared shirt that doesn’t have a stain on it... good enough!
          </span>
          <span>
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
        <h4 class="title-no-border">
          You said you don’t want gifts, but...?
          <span>
            If it’s a handmade gift or something super special and personal, we’d love it! If it’s a plain old gift from a store, we’d rather you donate toward our European excursion. And if you can’t afford a gift, we totally understand. It means more to us that you can just spend the evening with us.
          </span>
        </h4>
        <h4 class="title-no-border">
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
          ${s.map(e=>this.renderPerson(e))}
          <div class="title">
            <h4>The Best Ladies</h4>
          </div>
          <div class="title">
            <h4>The Best Men</h4>
          </div>
          ${n.map(e=>this.renderPerson(e))}
        </div>
      </div>
    </div>`}})}}]);