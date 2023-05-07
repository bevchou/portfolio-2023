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
        People can use any device with a web browser to control and/or view
        visual outputs. The controller has two options: gif mode and abstract
        visual mode. Anyone can change the gif by submitting keywords or change
        the abstract visuals by selecting shapes and colors.
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
      { url: "/projects/controllers/lightcontroldemo.gif", caption: "Magnetic switches allow users to magically turn on/off and dim a grid of DMX lights based on the position of game pieces. Connects via WiFi." },
      {
        url: "/projects/controllers/gamecontrol-gif2.gif",
        caption: "This plug and play controller connects via USB to give users precise control over their spaceship when playing Lunar Lander.",
      },
      {
        url: "/projects/controllers/MIDI-gif.gif",
        caption: "Pull chains let users build sustained chords and a springy slider allows for pitch bend effects on any MIDI synth. Made in collaboration with Anthony Bui.",
      },
      { url: "/projects/controllers/websocket-controller.gif", caption: "This WiFi connected game controller gives user more precision when moving their paddle vertically and horizontally in a multiplayer pong style game." },
    ],
    text: (
      <span>
      I prototyped a series of functional physical interfaces that communicate with other devices. I built these projects using Arduino microcontrollers (MKR1000, Micro, Uno, ESP8266), a variety of analog and digital sensors, and different data protocols (sACN/DMX, HID/USB, MIDI, TCP).
      <br></br><br></br>
      More detail on each controller:
      <ul>
        <li><a target="_blank" href="https://itp.beverlychou.com/lighting-controller-interface/">DMX light</a></li>
        <li><a target="_blank" href="http://itp.beverlychou.com/lunar-lander-controller/">HID game</a></li>
        <li><a target="_blank" href="http://itp.beverlychou.com/midi-pull-chain-interface/">MIDI synth</a></li>
        <li><a target="_blank" href="https://itp.beverlychou.com/websocket-game-controller/">Wifi game</a></li>
      </ul>
      </span>
    ),
  },
  
  aros: {
    name: "Aros for Visually Impaired Cooks",
    icon: "/projects/aros/icon.jpg",
    tags: ["product design", "accessibility"],
    year: 2015,
  },
  soundTent: {
    name: "Sound Tent",
    icon: "/projects/soundTent/icon.jpg",
    tags: ["physical interface", "arduino"],
    year: 2018,
  },
  selfie: {
    name: "Selfie Portaits",
    icon: "/projects/selfie/icon.jpg",
    tags: ["interactive web", "p5.js"],
    year: 2018,
  },
};
