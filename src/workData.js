export const workData = {
  visualMode: {
    name: "Visual Mode",
    tags: ["interactive web", "node.js"],
    year: 2018,
    icon: "/projects/visualMode/icon.jpg",
    images: [
      {
        url: "//player.vimeo.com/video/311760698?title=0&byline=0&portrait=0",
        caption: "at the itp show",
        vimeo: true,
      },
      {
        url: "/projects/visualMode/2.jpg",
        caption: "view for the controller",
      },
      {
        url: "/projects/visualMode/3.jpg",
        caption: "",
      },
      { url: "/projects/visualMode/4.jpg", caption: "" },
      {
        url: "//player.vimeo.com/video/310251246?title=0&byline=0&portrait=0",
        caption: "view for audience",
        vimeo: true,
      },
    ],
    text: (
      <span>
        Play with the <a href="https://visualmode.space/command/">controller</a>{" "}
        and <a href="https://visualmode.space/">view it here</a>!<br></br>
        <br></br>
        Originally designed to be a collective{" "}
        <a href="https://en.wikipedia.org/wiki/VJing">VJing</a> experience for
        parties, Visual Mode is a web app and a pop-up interactive installation.
        People can use any device with a web browser to control and view visual
        outputs. The controller has two options: gif mode and abstract visual
        mode. Anyone can change the gif by submitting keywords or change the
        abstract visuals by selecting shapes and colors.
        <br></br>
        <br></br>
        RESTful API server made with Node.js. Visuals created with p5.js and
        Giphy API.<br></br>
        <br></br>
        <a href="https://github.com/miamiww/VJmachine">Code</a> &{" "}
        <a href="https://itp.beverlychou.com/restful-control-surface-design-specification/">
          API specification
        </a>
        .<br></br>
        <br></br>
        Made in collaboration with{" "}
        <a href="https://ellennickles.site">Ellen Nickles</a>,{" "}
        <a href="http://alden.website/">Alden Jones</a>, and{" "}
        <a href="https://www.ridwanmadon.com/">Ridwan Madon</a>.
      </span>
    ),
  },
  controllers: {
    name: "Tangible Controllers",
    icon: "/projects/controllers/icon.jpg",
    tags: ["physical interface", "arduino"],
    year: 2018,
    images: [
      {
        url: "/projects/controllers/lightcontroldemo.gif",
        caption:
          "Magnetic switches allow users to magically turn on/off and dim a grid of DMX lights based on the position of game pieces. Connects via WiFi.",
      },
      {
        url: "/projects/controllers/gamecontrol-gif2.gif",
        caption:
          "This plug and play controller connects via USB to give users precise control over their spaceship when playing Lunar Lander.",
      },
      {
        url: "/projects/controllers/MIDI-gif.gif",
        caption:
          "Pull chains let users build sustained chords and a springy slider allows for pitch bend effects on any MIDI synth. Made in collaboration with Anthony Bui.",
      },
      {
        url: "/projects/controllers/websocket-controller.gif",
        caption:
          "This WiFi connected game controller gives user more precision when moving their paddle vertically and horizontally in a multiplayer pong style game.",
      },
    ],
    text: (
      <span>
        I made a series of physical interfaces that communicate with other
        devices. I built these projects using Arduino microcontrollers (MKR1000,
        Micro, Uno, ESP8266), a variety of analog and digital sensors, and
        different data protocols (sACN/DMX, HID/USB, MIDI, TCP).
        <br></br>
        <br></br>
        More detail on each controller:
        <ul>
          <li>
            <a
              target="_blank"
              href="https://itp.beverlychou.com/lighting-controller-interface/"
            >
              DMX light
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://itp.beverlychou.com/lunar-lander-controller/"
            >
              HID game
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://itp.beverlychou.com/midi-pull-chain-interface/"
            >
              MIDI synth
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://itp.beverlychou.com/websocket-game-controller/"
            >
              Wifi game
            </a>
          </li>
        </ul>
      </span>
    ),
  },
  aros: {
    name: "Spice Dispenser for Visually Impaired",
    icon: "/projects/aros/icon.jpg",
    tags: ["product design", "accessibility"],
    year: 2015,
    images: [
      {
        url: "/projects/aros/final1.jpg",
        caption:
          "Identify spices using braille labels and/or textures on the top and body of the dispenser. Magnetic strips help to feel where to place each dispenser and prevent them from tipping over.",
      },
      {
        url: "/projects/aros/howto1.jpg",
        caption:
          "Locate the tab at the top of the dispenser and push it up to open. Insert the funnel by aligning bright green sections.",
      },
      {
        url: "/projects/aros/howto2.jpg",
        caption: "Pour in spices. Remove funnel and close lid.",
      },
      {
        url: "/projects/aros/howto3.jpg",
        caption:
          "Each button push dispenses 1/4 teaspoon of spices into a storage chamber. Push the button as many times as necessary to get the desired amount.",
      },
      {
        url: "/projects/aros/howto4.jpg",
        caption:
          "Hold Aros over your cooking, then open the tab at the bottom to release spices.",
      },
      {
        url: "/projects/aros/market1.png",
        caption: "Competition analysis position plot",
      },
      {
        url: "/projects/aros/process1.jpg",
        caption:
          "Alpha prototypes for usability testing and Kansei Engineering Analysis",
      },
      {
        url: "/projects/aros/usertest1.jpg",
        caption: "Usability testing in progress",
      },
      {
        url: "/projects/aros/processvid",
        caption: "Force analysis simulation animation in ADAMS",
      },
      {
        url: "/projects/aros/engin1.png",
        caption: "Force analysis simulation results",
      },
      {
        url: "/projects/aros/process2.jpg",
        caption: "Internal parts in proof-of-concept",
      },
    ],
    text: (
      <span>
        Aros is a spice dispenser designed for visually impaired people to
        accurately dispense spices in 1/4 teaspoon quantities. Intended to be an
        intuitive experience for users with limited or no vision, Aros has
        tactile indicators, high contrast colors, and a unique form to take into
        account that visually impaired users tend to use their fingers rather
        than their thumbs.
        <br></br> <br></br>
        <u>My Role:</u> I played a large role in identifying the user scenario,
        market research, and competition analysis. I did the engineering for the
        measurement and dispensing mechanism and conducted force analyses on all
        mechanical components. I also created build plans for injection mold
        mass manufacturing and aided in the fabrication of the proof-of-concept.
        <br></br> <br></br>The Aros proof-of-concept was fabricated from 3-D
        printed ABS plastic and NinjaFlex, laser cut clear acrylic, steel pins,
        a spring, and magnets.
        <br></br> <br></br>
        <u>The Aros team:</u> Beverly Chou (B.S.E. Mechanical Engineering),
        Rohan Malpani (M.S. Human-Computer Interaction), Adam Rosekelly (M.S.
        Architecture), and Matt Vedrin (M.S.E. Mechanical Engineering)
      </span>
    ),
  },
  soundTent: {
    name: "Sound Tent",
    icon: "/projects/soundTent/icon.jpg",
    tags: ["physical interface", "arduino"],
    year: 2017,
    images: [
      {
        url: "//player.vimeo.com/video/249473264?byline=0&portrait=0",
        caption: "",
        vimeo: true,
      },
      {
        url: "//player.vimeo.com/video/249264972?byline=0&portrait=0",
        caption: "at the itp show",
        vimeo: true,
      },
      {
        url: "/projects/soundTent/final1.jpg",
        caption: "",
      },
      {
        url: "/projects/soundTent/final2.jpg",
        caption: "",
      },
      { url: "/projects/soundTent/final3.jpg", caption: "" },
      {
        url: "/projects/soundTent/systems-diagram.png",
        caption: "Systems diagram",
      },
      {
        url: "/projects/soundTent/button-press-actives-LEDs.gif",
        caption: "Breadboard prototype",
      },
      {
        url: "/projects/soundTent/prototype2.jpg",
        caption: "User testing the prototype interface",
      },
      {
        url: "/projects/soundTent/cardboard-prototype.jpg",
        caption: "Full size cardboard interface mockup",
      },
      {
        url: "/projects/soundTent/fab-inprocess.jpg",
        caption: "Putting together the final interface",
      },
    ],
    text: (
      <span>
        Sound Tent is a playful, sensory space for two people to connect through
        interactions with sound and light. Buttons create melodic sounds,
        similar to a piano, and the knobs control the other person's volume and
        octave. In the middle of the console, they can tap on capacitive touch
        pads to create percussive sounds. As the two users play together and
        create more sound, the lights around them get brighter.
        <br></br>
        <br></br> Read more about the development and user testing process on my{" "}
        <a href="http://itp.beverlychou.com/categories/p-comp/">
          physical computing blog here
        </a>
        .<br></br>
        <br></br>
        <u>My Role:</u> I developed the concept and designed the user
        interaction for Sound Tent. I also led the fabrication and worked with
        Brandon Newberg to develop the Arduino code.
        <br></br>
        <br></br>
        Electronic components were created using Arduino Uno, Korg NX5R, RGB
        LEDs, MPR121 (capacitive breakout), speakers, buttons, and
        potentiometers. The tent enclosure was made with fabric, rope, and wood.
      </span>
    ),
  },
  selfie: {
    name: "Selfie Portaits",
    icon: "/projects/selfie/icon.jpg",
    tags: ["interactive web", "p5.js"],
    year: 2017,
    images: [
      {
        url: "https://player.vimeo.com/video/244794385?title=0&byline=0&portrait=0",
        caption: "",
        vimeo: true,
      },
    ],
    text: (
      <span>
        View project <a href="https://beverlychou.com/selfieportrait/">here</a>!
        <br></br> <br></br>
        Historically, artists have used self-portraits as a way to express
        different facets of their identities. Now selfies and filters are often
        used to create illusions or sell things to us. I invite you to create a
        selfie portrait with your webcam by answering simple questions about
        yourself. Instead of beautifying or morphing your face, you will add to
        your image through self reflection.
        <br></br>
        <br></br> Made using <a href="https://p5js.org">p5.js</a>,{" "}
        <a href="https://github.com/auduno/clmtrackr/">clmtrackr</a>, and the{" "}
        <a href="https://www.flickr.com/services/api/">flickr api</a>.
      </span>
    ),
  },
  cats: {
    name: "Cats Are Liquid",
    icon: "/projects/cats/icon.jpg",
    tags: ["interactive web", "meow"],
    year: 2018,
    images: [
      {
        url: "https://player.vimeo.com/video/264161984?title=0&byline=0&portrait=0",
        caption: "",
        vimeo: true,
      },
    ],
    text: (
      <span>
        View project{" "}
        <a href="https://itp.beverlychou.com/hacking-the-browser/w2-responsive-site/cat.html">
          here
        </a>
        !<br></br> <br></br>
        There is a rule of physics that says liquids are able to take the shape
        of any container. Cats also follow this rule, and therefore are liquid.
        I’m proving that it’s true, even in the browser. Q.E.D. You may need to
        disable your popup blocker to view the demo. Works best on a desktop or
        laptop.
      </span>
    ),
  },
  makeathon: {
    name: "Makeathon",
    icon: "/projects/makeathon/icon.jpg",
    tags: ["event planning"],
    year: 2014,
    images: [
      {
        url: "//player.vimeo.com/video/89370226?title=0&byline=0&portrait=0",
        caption: "",
        vimeo: true,
      },
      {
        url: "/projects/makeathon/1.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/2.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/3.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/4.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/5.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/6.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/7.jpg",
        caption: "",
      },
      {
        url: "/projects/makeathon/8.jpg",
        caption: "",
      },
    ],
    text: (
      <span>
        Makeathon is an annual 36-hour interdisciplinary physical product design
        competition that brings college students from all disciplines together
        to turn their ideas into functional prototypes. At the first Makeathon,
        80 students from 6 colleges utilized rapid prototyping tools at TechShop
        Detroit to build a chair for arthritis sufferers, an extendable
        skateboard, modular dorm furniture, and more. At Makeathon's conclusion,
        teams pitched their product to a panel of experts and won $1,000 in
        awards.
        <br></br> <br></br>
        <u>My Role:</u> I started and directed the first annual Makeathon, which
        took place on February 21st to 23rd, 2014. I led a team of 5 to organize
        event details and fundraise $27k + sponsorships. Makeathon continues
        every year through the University of Michigan student organization{" "}
        <a href="http://mpowered.umich.edu">MPowered Entrepreneurship</a>.
        <br></br> <br></br>
        <u>Makeathon Team:</u> Soona Amhaz, Sydney Bigelow, Anant Kesavan,
        Romina Potter, Liz Waldvogel, and Phillip Yang
      </span>
    ),
  },
};
