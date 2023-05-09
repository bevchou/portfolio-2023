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
        Play with the{" "}
        <a target="_blank" href="https://visualmode.space/command/">
          controller
        </a>{" "}
        and{" "}
        <a target="_blank" href="https://visualmode.space/">
          view it here
        </a>
        !<br></br>
        <br></br>
        Originally designed to be a collective{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/VJing">
          VJing
        </a>{" "}
        experience for parties, Visual Mode is a web app and a pop-up
        interactive installation. People can use any device with a web browser
        to control and view visual outputs. The controller has two options: gif
        mode and abstract visual mode. Anyone can change the gif by submitting
        keywords or change the abstract visuals by selecting shapes and colors.
        <br></br>
        <br></br>
        RESTful API server made with Node.js. Visuals created with p5.js and
        Giphy API.<br></br>
        <br></br>
        <a target="_blank" href="https://github.com/miamiww/VJmachine">
          Code
        </a>{" "}
        &{" "}
        <a
          target="_blank"
          href="https://itp.beverlychou.com/restful-control-surface-design-specification/"
        >
          API specification
        </a>
        .<br></br>
        <br></br>
        Made in collaboration with{" "}
        <a target="_blank" href="https://ellennickles.site">
          Ellen Nickles
        </a>
        ,{" "}
        <a target="_blank" href="http://alden.website/">
          Thea Jones
        </a>
        , and{" "}
        <a target="_blank" href="https://www.ridwanmadon.com/">
          Ridwan Madon
        </a>
        .
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
        <a
          target="_blank"
          href="https://itp.beverlychou.com/hacking-the-browser/w2-responsive-site/cat.html"
        >
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
        <a target="_blank" href="http://itp.beverlychou.com/categories/p-comp/">
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
        View project{" "}
        <a target="_blank" href="https://beverlychou.com/selfieportrait/">
          here
        </a>
        !<br></br> <br></br>
        Historically, artists have used self-portraits as a way to express
        different facets of their identities. Now selfies and filters are often
        used to create illusions or sell things to us. I invite you to create a
        selfie portrait with your webcam by answering simple questions about
        yourself. Instead of beautifying or morphing your face, you will add to
        your image through self reflection.
        <br></br>
        <br></br> Made using{" "}
        <a target="_blank" href="https://p5js.org">
          p5.js
        </a>
        ,{" "}
        <a target="_blank" href="https://github.com/auduno/clmtrackr/">
          clmtrackr
        </a>
        , and the{" "}
        <a target="_blank" href="https://www.flickr.com/services/api/">
          flickr api
        </a>
        .
      </span>
    ),
  },
  tcflex: {
    name: "Wall Bracket for SONOS Speakers",
    icon: "/projects/tcflex/icon.jpg",
    tags: ["product design", "design for manufacturability"],
    year: 2016,
    images: [
      {
        url: "/projects/tcflex/model.png",
        caption: "",
      },
      {
        url: "/projects/tcflex/manual.jpg",
        caption: "installation manual",
      },
      {
        url: "/projects/tcflex/sketches.jpg",
        caption: "early ideation sketches",
      },
      {
        url: "/projects/tcflex/solidworks.png",
        caption: "SolidWorks drawings of variations",
      },
      {
        url: "/projects/tcflex/paperproto.jpg",
        caption: "paper prototypes I made to test the fit on each speaker",
      },

      {
        url: "/projects/tcflex/proto.jpg",
        caption:
          "sheet metal prototypes - the first one was too bulky (from left), the diagonal slots caused warping during the bending process (2nd), warping was grinded off during finishing (3rd), but this was too costly so I made the slots perpendicular to the edge (4th)",
      },
    ],
    text: (
      <span>
        The TcFLEX-SOLO is a bracket designed to mount the Sonos Play:1 or
        Play:3 directly to the wall. This articulating bracket also allows the
        SONOS speaker to be mounted in either a horizontal or vertical position
        for optimal placement in any room. Unlike other competitors like Flexson
        and Cavus, the TcFLEX-SOLO conceals the outlet and power cord.
        <br></br>
        <br></br>
        <u>My Role:</u> I was tasked to develop a low profile wall bracket that
        could fit both the SONOS Play:1 and Play:3, while concealing power cords
        and utilizing already in-stock parts. I did all design and validation on
        the sheet metal parts and the install instructions. To lower costs, I
        also simplified existing designs for the articulating mount parts.
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
  soap: {
    name: "Olay Soap Dish",
    icon: "/projects/soap/icon.jpg",
    tags: ["product design, fabrication"],
    year: 2015,
    images: [
      {
        url: "/projects/soap/final1.jpg",
        caption: "",
      },

      {
        url: "/projects/soap/process1.jpeg",
        caption: "some of the sketches",
      },
      {
        url: "/projects/soap/process2.jpg",
        caption: "foam models during ideation",
      },
      {
        url: "/projects/soap/process3.jpg",
        caption: "the MDF bucks and vacuum formed polystyrene pieces",
      },
      {
        url: "/projects/soap/final2.jpg",
        caption: "",
      },
    ],
    text: (
      <span>
        For a case study, I designed and created a soap dish for Olay's Beauty
        Bar. The soap dish is designed to fit with Olay's branding. It was also
        tested to have a water tight seal and to minimize soap scum.
        <br></br> <br></br>I went through the process of ideation, creating the
        buck, vacuuming forming, and finishing the final pieces.
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
        Makeathon is an annual 36-hour physical product design competition that
        brings college students from all disciplines together to turn their
        ideas into functional prototypes. At the first Makeathon, 80 students
        from 6 colleges utilized rapid prototyping tools at TechShop Detroit to
        build a chair for arthritis sufferers, an extendable skateboard, modular
        dorm furniture, and more. At Makeathon's conclusion, teams pitched their
        product to a panel of experts and won $1,000 in awards. Check out some
        of the press:
        <ul>
          <li>
            <a
              target="_blank"
              href="http://www.concentratemedia.com/features/makeathon20140269.aspx"
            >
              Maker Madness / Concentrate Media
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://www.mlive.com/news/ann-arbor/index.ssf/2014/01/a2awesome_foundation_provides.html"
            >
              A2Awesome Foundation provides more than 20 $1,000 grants to
              innovators / MLive
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://markmaynard.com/2014/01/u-m-undergrads-to-launch-makeathon-with-a2awesome-grant/"
            >
              U-M undergrads to launch Makeathon with A2Awesome grant / Mark
              Maynard
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://statenews.com/article/2014/02/first-makeathon-competition-at-u-m-to-get-students-creativity"
            >
              First Makeathon competition at U-M to get students' creativity /
              The State News
            </a>
          </li>
        </ul>
        <br></br>
        <u>My Role:</u> I started and directed the first annual Makeathon, which
        took place on February 21st to 23rd, 2014. I led a team of 5 to organize
        event details and fundraise $27k + sponsorships. Makeathon continues
        every year through the University of Michigan student organization{" "}
        <a target="_blank" href="http://mpowered.umich.edu">
          MPowered Entrepreneurship
        </a>
        .<br></br> <br></br>
        <u>Makeathon Team:</u> Soona Amhaz, Sydney Bigelow, Anant Kesavan,
        Romina Potter, Liz Waldvogel, and Phillip Yang
      </span>
    ),
  },

  dch: {
    name: "DCH Spark",
    icon: "/projects/dch/icon.jpg",
    tags: ["workshop"],
    year: 2013,
    images: [
      {
        url: "/projects/dch/Housing4.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/Housing2.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/Housing3.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/MagnetSpeaker1.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/MagnetSpeaker2.jpg",
        caption: "",
      },

      {
        url: "/projects/dch/DCHSparkGuide2.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/DCHSparkGuide1.jpg",
        caption: "",
      },
      {
        url: "/projects/dch/DCHSparkLogoInvert.jpg",
        caption: "",
      },
    ],
    text: (
      <span>
        What makes a person go from showing initial interest to taking that next
        step? We wanted to encourage students at Detroit Community High School
        to ask the same question.
        <br></br>
        <br></br> DCH Spark is a series of workshops that aims to build off of
        students' passion for music and working with their hands by providing
        resources and a space where students can explore the intersection of
        music and technology. The projects we developed for DCH Spark involve
        creating speakers out of magnets and a styrofoam cup and building a
        finished wooden speaker. We want this program to be a spark for
        students, igniting a passion for continuous learning and lifelong
        curiosity.
        <br></br>
        <br></br>
        <u>The DCH Spark team:</u> Eliza Bara, Beverly Chou, Kathleen Chou, and
        Michael Wang.
      </span>
    ),
  },
};
