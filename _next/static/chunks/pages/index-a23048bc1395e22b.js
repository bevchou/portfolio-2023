(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5505:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=a(8754)._(a(7294)).default.createContext({})},1342:function(e,t){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=e.hybrid,n=e.hasQuery;return void 0!==t&&t||void 0!==a&&a&&void 0!==n&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return a}})},1597:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{defaultHead:function(){return d},default:function(){return g}});var n=a(4788),o=a(8754),r=a(1757)._(a(7294)),i=o._(a(7271)),s=a(5505),c=a(236),l=a(1342);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}a(3766);var u=["name","httpEquiv","charSet","itemProp"];function h(e,t){var a,o,i,s,c=t.inAmpMode;return e.reduce(p,[]).reverse().concat(d(c).reverse()).filter((a=new Set,o=new Set,i=new Set,s={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var r=e.key.slice(e.key.indexOf("$")+1);a.has(r)?t=!1:a.add(r)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var c=0,l=u.length;c<l;c++){var d=u[c];if(e.props.hasOwnProperty(d)){if("charSet"===d)i.has(d)?t=!1:i.add(d);else{var p=e.props[d],h=s[d]||new Set;("name"!==d||!n)&&h.has(p)?t=!1:(h.add(p),s[d]=h)}}}}return t})).reverse().map(function(e,t){var a=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=n._({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,r.default.cloneElement(e,o)}return r.default.cloneElement(e,{key:a})})}var g=function(e){var t=e.children,a=(0,r.useContext)(s.AmpStateContext),n=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,l.isInAmpMode)(a)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7271:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var n=a(1757)._(a(7294)),o=n.useLayoutEffect,r=n.useEffect;function i(e){var t=e.headManager,a=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(a(o,e))}}return o(function(){var a;return null==t||null==(a=t.mountedInstances)||a.add(e.children),function(){var a;null==t||null==(a=t.mountedInstances)||a.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}}),r(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});var a=function(e){}},9339:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var n=a(7294),o=a(9008),r=a.n(o),i=a(4298),s=a.n(i),c=a(5893),l={dataviz:{name:"DataViz Studio",icon:"/projects/dataviz/icon.png",tags:["interactive web","d3.js"],year:2020,images:[{url:"/projects/dataviz/1.png",caption:"chart gallery with filters in left panel"},{url:"/projects/dataviz/2.png",caption:"more info on each chart"},{url:"/projects/dataviz/3.png",caption:"bar chart editor"},{url:"/projects/dataviz/4.png",caption:"line chart editor"},{url:"/projects/dataviz/5.png",caption:"single bar editor"},{url:"/projects/dataviz/6.png",caption:"donut chart editor in dark mode theme"},{url:"/projects/dataviz/7.png",caption:"gallery in dark mode theme"}],text:(0,c.jsxs)("span",{children:["Try it out"," ",(0,c.jsx)("a",{target:"_blank",href:"https://prototypes.intuit.com/datavizstudio/",children:"here"}),"!",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"DataViz Studio is a tool for designers to better understand how to use charts within their designs and a chart generator where designers can customize and export charts as an SVG or PNG using real data.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{})," QuickBooks is a product that benefits a lot from data visualizations and I wanted to help our designers feel confident when adding charts into their designs. Oftentimes designers would throw in an extra chart to fill an empty space, but that can result in confusion for end users. Another problem I encountered was that designers would make charts from scratch that look amazing in a wireframe, but once a developer built it and added data, it didn’t look as good or wasn’t great at conveying meaningful information.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"To combat these struggles, DataViz Studio has two parts:",(0,c.jsxs)("ol",{children:[(0,c.jsx)("li",{children:"DataViz Studio’s gallery has filters on the left panel to help designers narrow down which charts work best for their intended application. Each item in the gallery includes how to use each chart and best practices."}),(0,c.jsx)("li",{children:"The chart editor allows designers to paste data from a spreadsheet (perhaps provided by a dev or data analyst) into the editor to create their own charts. They can then customize size, colors, labels, titles, and more before exporting to a PNG or an SVG that is easy to edit in Figma, Illustrator, or another editor."})]}),(0,c.jsx)("br",{}),"I designed and built DataViz Studio using React, d3.js, and react-datasheet while working as a design technologist at Intuit."]})},fwrd:{name:"Race to Hunts Point",icon:"/projects/fwrd/icon.jpg",tags:["game design, fabrication"],year:2019,images:[{url:"https://www.youtube-nocookie.com/embed/K5o99VtoJb8",caption:"about the game",type:"youtube"},{url:"https://www.youtube.com/embed/xX8ZAaVrbO0",caption:"FWRD Fellowship program overview",type:"youtube"},{url:"/projects/fwrd/1.jpg",caption:"final board game build"},{url:"/projects/fwrd/2.jpg",caption:"close up of the cards"},{url:"/projects/fwrd/3.jpg",caption:"experiments for the board"},{url:"/projects/fwrd/4.png",caption:"playtesting a prototype"},{url:"/projects/fwrd/5.png",caption:"playtesting a prototype"}],text:(0,c.jsxs)("span",{children:["Race to Hunts Point is a board game for high school aged students that aims to demystify the food system and answer questions like - Where does our food come from? How does it get to the grocery store? Why is it possible to have blueberries year round?",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"We were inspired by the complex distribution system within NYC and Hunts Point, which is a major food distribution point in the city. We decided to zoom out and focus on North + South America so we could capture part of a global system.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"The game emulates the process of managing growing produce and then moving the food to NYC. Pathways on the board are based on actual shipping routes. Resource management is key in the game. Players have to think about time (seasonality + perishability of foods, shipping times), resources (money, trading with players), technology (pay to increase efficiency at farming and/or shipping phases), and supply + demand at the final destination.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"We quickly iterated through several different versions of the game, making sure to playtest with high schoolers and get feedback from game designers along the way. Throughout we explored how to make the visual design reflect the textures and topographies of farms and spaces that food moves through on its way to us. For the board we experimented with different materials and used rapid prototyping tools like laser cutters, CNC (Shapeoko + Othermill), and 3D printers.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"Co-designers:"})," ",(0,c.jsx)("a",{target:"_blank",href:"https://www.behance.net/alamaroliv8598",children:"Angel Lamar"})," ","and"," ",(0,c.jsx)("a",{target:"_blank",href:"https://www.lilianyihsuanlin.com/",children:"Lilian Yi-Hsuan Lin"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"This project was completed in 3 months through the"," ",(0,c.jsx)("a",{target:"_blank",href:"https://brooklynresearch.org/2019/03/01/summer-internship-2019/",children:"FWRD Fellowship"})," ","at"," ",(0,c.jsx)("a",{target:"_blank",href:"https://www.tomorrow-lab.com/",children:"Tomorrow Lab"})," ","and"," ",(0,c.jsx)("a",{target:"_blank",href:"https://brooklynresearch.org/",children:"Brookyn Research"}),"."]})},slownet:{name:"Slow Net",tags:["networks","internet art"],year:2019,icon:"/projects/slownet/icon.jpg",images:[{url:"/projects/slownet/1.jpg",caption:""},{url:"/projects/slownet/slow-sign.jpg",caption:""},{url:"https://player.vimeo.com/video/336836245?h=f0636b4786",caption:"itp thesis week",type:"vimeo"},{url:"/projects/slownet/turtle-mail.jpg",caption:""}],text:(0,c.jsxs)("span",{children:["Check out the"," ",(0,c.jsx)("a",{target:"_blank",href:"https://slownet.work/",children:"Slow Net"})," ","site.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Slow Net is a series of experiments that explore how slow networks can be used to protect against data-collecting entities that threaten our autonomy and influence our identities. It consists of (1) A zine called A Quick Guide to the Slow Net that provides context about the problems underpinning online data collection, (2) an online messaging application, Slow Chat, that forces users to write longer messages and wait longer between messages, and (3) a router that slows down your internet experience.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"I also showed Slow Net at"," ",(0,c.jsx)("a",{target:"_blank",href:"https://radicalnetworks.org/archives/2019/",children:"Radical Networks"})," ","in 2019."]})},visualMode:{name:"Visual Mode",tags:["interactive web","node.js"],year:2018,icon:"/projects/visualMode/icon.jpg",images:[{url:"//player.vimeo.com/video/311760698?title=0&byline=0&portrait=0",caption:"at the itp show",type:"vimeo"},{url:"/projects/visualMode/2.jpg",caption:"view for the controller"},{url:"/projects/visualMode/3.jpg",caption:""},{url:"/projects/visualMode/4.jpg",caption:""},{url:"//player.vimeo.com/video/310251246?title=0&byline=0&portrait=0",caption:"view for audience",type:"vimeo"}],text:(0,c.jsxs)("span",{children:["Play with the"," ",(0,c.jsx)("a",{target:"_blank",href:"https://visualmode.space/command/",children:"controller"})," ","and"," ",(0,c.jsx)("a",{target:"_blank",href:"https://visualmode.space/",children:"view it here"}),"!",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Originally designed to be a collective"," ",(0,c.jsx)("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/VJing",children:"VJing"})," ","experience for parties, Visual Mode is a web app and a pop-up interactive installation. People can use any device with a web browser to control and view visual outputs. The controller has two options: gif mode and abstract visual mode. Anyone can change the gif by submitting keywords or change the abstract visuals by selecting shapes and colors.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"RESTful API server made with Node.js. Visuals created with p5.js and Giphy API.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("a",{target:"_blank",href:"https://github.com/miamiww/VJmachine",children:"Code"})," ","&"," ",(0,c.jsx)("a",{target:"_blank",href:"https://itp.beverlychou.com/restful-control-surface-design-specification/",children:"API specification"}),".",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Made in collaboration with"," ",(0,c.jsx)("a",{target:"_blank",href:"https://ellennickles.site",children:"Ellen Nickles"}),","," ",(0,c.jsx)("a",{target:"_blank",href:"http://alden.website/",children:"Thea Jones"}),", and"," ",(0,c.jsx)("a",{target:"_blank",href:"https://www.ridwanmadon.com/",children:"Ridwan Madon"}),"."]})},controllers:{name:"Tangible Controllers",icon:"/projects/controllers/icon.jpg",tags:["physical interface","arduino"],year:2018,images:[{url:"/projects/controllers/lightcontroldemo.gif",caption:"Magnetic switches allow users to magically turn on/off and dim a grid of DMX lights based on the position of game pieces. Connects via WiFi."},{url:"/projects/controllers/gamecontrol-gif2.gif",caption:"This plug and play controller connects via USB to give users precise control over their spaceship when playing Lunar Lander."},{url:"/projects/controllers/MIDI-gif.gif",caption:"Pull chains let users build sustained chords and a springy slider allows for pitch bend effects on any MIDI synth. Made in collaboration with Anthony Bui."},{url:"/projects/controllers/websocket-controller.gif",caption:"This WiFi connected game controller gives user more precision when moving their paddle vertically and horizontally in a multiplayer pong style game."}],text:(0,c.jsxs)("span",{children:["I made a series of physical interfaces that communicate with other devices. I built these projects using Arduino microcontrollers (MKR1000, Micro, Uno, ESP8266), a variety of analog and digital sensors, and different data protocols (sACN/DMX, HID/USB, MIDI, TCP).",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"More detail on each controller:",(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"https://itp.beverlychou.com/lighting-controller-interface/",children:"DMX light"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://itp.beverlychou.com/lunar-lander-controller/",children:"HID game"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://itp.beverlychou.com/midi-pull-chain-interface/",children:"MIDI synth"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"https://itp.beverlychou.com/websocket-game-controller/",children:"Wifi game"})})]})]})},cats:{name:"Cats Are Liquid",icon:"/projects/cats/icon.jpg",tags:["interactive web","meow"],year:2018,images:[{url:"https://player.vimeo.com/video/264161984?title=0&byline=0&portrait=0",caption:"",type:"vimeo"}],text:(0,c.jsxs)("span",{children:["View project"," ",(0,c.jsx)("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return window.open("https://itp.beverlychou.com/hacking-the-browser/w2-responsive-site/cat.html","liquid cats","width=500, height=475, left=24, top=24, scrollbars=no, resizable=yes,toolbar=no, menubar=no,directories=no, status=no"),!1},children:"here"}),"!",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"There is a rule of physics that says liquids are able to take the shape of any container. Cats also follow this rule, and therefore are liquid. I’m proving that it’s true, even in the browser. You may need to disable your popup blocker to view the demo. Works best on a desktop or laptop."]})},soundTent:{name:"Sound Tent",icon:"/projects/soundTent/icon.jpg",tags:["physical interface","arduino"],year:2017,images:[{url:"//player.vimeo.com/video/249473264?byline=0&portrait=0",caption:"",type:"vimeo"},{url:"//player.vimeo.com/video/249264972?byline=0&portrait=0",caption:"at the itp show",type:"vimeo"},{url:"/projects/soundTent/final1.jpg",caption:""},{url:"/projects/soundTent/final2.jpg",caption:""},{url:"/projects/soundTent/final3.jpg",caption:""},{url:"/projects/soundTent/systems-diagram.png",caption:"Systems diagram"},{url:"/projects/soundTent/button-press-actives-LEDs.gif",caption:"Breadboard prototype"},{url:"/projects/soundTent/prototype2.jpg",caption:"User testing the prototype interface"},{url:"/projects/soundTent/cardboard-prototype.jpg",caption:"Full size cardboard interface mockup"},{url:"/projects/soundTent/fab-inprocess.jpg",caption:"Putting together the final interface"}],text:(0,c.jsxs)("span",{children:["Sound Tent is a playful, sensory space for two people to connect through interactions with sound and light. Buttons create melodic sounds, similar to a piano, and the knobs control the other person's volume and octave. In the middle of the console, they can tap on capacitive touch pads to create percussive sounds. As the two users play together and create more sound, the lights around them get brighter.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{})," Read more about the development and user testing process on my"," ",(0,c.jsx)("a",{target:"_blank",href:"http://itp.beverlychou.com/categories/p-comp/",children:"physical computing blog here"}),".",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"My Role:"})," I developed the concept and designed the user interaction for Sound Tent. I also led the fabrication and worked with Brandon Newberg to develop the Arduino code.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Electronic components were created using Arduino Uno, Korg NX5R, RGB LEDs, MPR121 (capacitive breakout), speakers, buttons, and potentiometers. The tent enclosure was made with fabric, rope, and wood."]})},selfie:{name:"Selfie Portaits",icon:"/projects/selfie/icon.jpg",tags:["interactive web","p5.js"],year:2017,images:[{url:"https://player.vimeo.com/video/244794385?title=0&byline=0&portrait=0",caption:"",type:"vimeo"}],text:(0,c.jsxs)("span",{children:["View project"," ",(0,c.jsx)("a",{target:"_blank",href:"/selfieportrait/index.html/",children:"here"}),"!",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"Historically, artists have used self-portraits as a way to express different facets of their identities. Now selfies and filters are often used to create illusions or sell things to us. I invite you to create a selfie portrait with your webcam by answering simple questions about yourself. Instead of beautifying or morphing your face, you will add to your image through self reflection.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{})," Made using"," ",(0,c.jsx)("a",{target:"_blank",href:"https://p5js.org",children:"p5.js"}),","," ",(0,c.jsx)("a",{target:"_blank",href:"https://github.com/auduno/clmtrackr/",children:"clmtrackr"}),", and the"," ",(0,c.jsx)("a",{target:"_blank",href:"https://www.flickr.com/services/api/",children:"flickr api"}),"."]})},tcflex:{name:"Wall Bracket for SONOS Speakers",icon:"/projects/tcflex/icon.jpg",tags:["product design","design for manufacturability"],year:2016,images:[{url:"/projects/tcflex/model.png",caption:""},{url:"/projects/tcflex/manual.jpg",caption:"installation manual"},{url:"/projects/tcflex/sketches.jpg",caption:"early ideation sketches"},{url:"/projects/tcflex/solidworks.png",caption:"SolidWorks drawings of variations"},{url:"/projects/tcflex/paperproto.jpg",caption:"paper prototypes I made to test the fit on each speaker"},{url:"/projects/tcflex/proto.jpg",caption:"sheet metal prototypes - the first one was too bulky (from left), the diagonal slots caused warping during the bending process (2nd), warping was grinded off during finishing (3rd), but this was too costly so I made the slots perpendicular to the edge (4th)"}],text:(0,c.jsxs)("span",{children:["The TcFLEX-SOLO is a bracket designed to mount the Sonos Play:1 or Play:3 directly to the wall. This articulating bracket also allows the SONOS speaker to be mounted in either a horizontal or vertical position for optimal placement in any room. Unlike other competitors like Flexson and Cavus, the TcFLEX-SOLO conceals the outlet and power cord.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"My Role:"})," I was tasked to develop a low profile wall bracket that could fit both the SONOS Play:1 and Play:3, while concealing power cords and utilizing already in-stock parts. I did all design and validation on the sheet metal parts and the install instructions. To lower costs, I also simplified existing designs for the articulating mount parts."]})},aros:{name:"Spice Dispenser for Visually Impaired",icon:"/projects/aros/icon.jpg",tags:["product design","accessibility"],year:2015,images:[{url:"/projects/aros/final1.jpg",caption:"Identify spices using braille labels and/or textures on the top and body of the dispenser. Magnetic strips help to feel where to place each dispenser and prevent them from tipping over."},{url:"/projects/aros/howto1.jpg",caption:"Locate the tab at the top of the dispenser and push it up to open. Insert the funnel by aligning bright green sections."},{url:"/projects/aros/howto2.jpg",caption:"Pour in spices. Remove funnel and close lid."},{url:"/projects/aros/howto3.jpg",caption:"Each button push dispenses 1/4 teaspoon of spices into a storage chamber. Push the button as many times as necessary to get the desired amount."},{url:"/projects/aros/howto4.jpg",caption:"Hold Aros over your cooking, then open the tab at the bottom to release spices."},{url:"/projects/aros/market1.png",caption:"Competition analysis position plot"},{url:"/projects/aros/process1.jpg",caption:"Alpha prototypes for usability testing and Kansei Engineering Analysis"},{url:"/projects/aros/usertest1.jpg",caption:"Usability testing in progress"},{url:"/projects/aros/processvid",caption:"Force analysis simulation animation in ADAMS"},{url:"/projects/aros/engin1.png",caption:"Force analysis simulation results"},{url:"/projects/aros/process2.jpg",caption:"Internal parts in proof-of-concept"}],text:(0,c.jsxs)("span",{children:["Aros is a spice dispenser designed for visually impaired people to accurately dispense spices in 1/4 teaspoon quantities. Intended to be an intuitive experience for users with limited or no vision, Aros has tactile indicators, high contrast colors, and a unique form to take into account that visually impaired users tend to use their fingers rather than their thumbs.",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"My Role:"})," I played a large role in identifying the user scenario, market research, and competition analysis. I did the engineering for the measurement and dispensing mechanism and conducted force analyses on all mechanical components. I also created build plans for injection mold mass manufacturing and aided in the fabrication of the proof-of-concept.",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"The Aros proof-of-concept was fabricated from 3-D printed ABS plastic and NinjaFlex, laser cut clear acrylic, steel pins, a spring, and magnets.",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"The Aros team:"})," Beverly Chou (B.S.E. Mechanical Engineering), Rohan Malpani (M.S. Human-Computer Interaction), Adam Rosekelly (M.S. Architecture), and Matt Vedrin (M.S.E. Mechanical Engineering)"]})},light:{name:"Tilting Push Light",icon:"/projects/light/icon.jpg",tags:["product design, fabrication"],year:2015,images:[{url:"/projects/light/final1.jpg",caption:""},{url:"/projects/light/final4.jpg",caption:""},{url:"/projects/light/process1.jpeg",caption:"some of the sketches"},{url:"/projects/light/process2.jpeg",caption:"more sketches"},{url:"/projects/light/process3.jpg",caption:"foam models"},{url:"/projects/light/process4.jpg",caption:"MDF buck and vacuum formed polystyrene plastic"},{url:"/projects/light/process5.jpg",caption:"two part silicon mold"}],text:(0,c.jsxs)("span",{children:["I took apart a push light intended for wall mounting (silver) and then created a new mating part to the front face of the original light. The new design allows the light to sit on a surface at varying angles.",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"This was my process:",(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("u",{children:"Ideation:"})," Sketch and create foam models."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("u",{children:"Master Part:"})," Hand build MDF buck and vacuum form polystyrene plastic. Add supports and bosses to accommodate internal electronics."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("u",{children:"Two-Part Silicon Mold:"})," First cast the exterior of the master part (blue), then the interior (clear)."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("u",{children:"Reproductions:"})," Inject urethane into silicon mold by hand."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("u",{children:"Finish:"})," Sand, paint, and assemble new part to original parts."]})]})]})},soap:{name:"Olay Soap Dish",icon:"/projects/soap/icon.jpg",tags:["product design, fabrication"],year:2015,images:[{url:"/projects/soap/final1.jpg",caption:""},{url:"/projects/soap/process1.jpeg",caption:"some of the sketches"},{url:"/projects/soap/process2.jpg",caption:"foam models during ideation"},{url:"/projects/soap/process3.jpg",caption:"the MDF bucks and vacuum formed polystyrene pieces"},{url:"/projects/soap/final2.jpg",caption:""}],text:(0,c.jsxs)("span",{children:["For a case study, I designed and created a soap dish for Olay's Beauty Bar. The soap dish is designed to fit with Olay's branding. It was also tested to have a water tight seal and to minimize soap scum.",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),"I went through the process of ideation, creating the buck, vacuuming forming, and finishing the final pieces."]})},makeathon:{name:"Makeathon",icon:"/projects/makeathon/icon.jpg",tags:["event planning"],year:2014,images:[{url:"//player.vimeo.com/video/89370226?title=0&byline=0&portrait=0",caption:"",type:"vimeo"},{url:"/projects/makeathon/1.jpg",caption:""},{url:"/projects/makeathon/2.jpg",caption:""},{url:"/projects/makeathon/3.jpg",caption:""},{url:"/projects/makeathon/4.jpg",caption:""},{url:"/projects/makeathon/5.jpg",caption:""},{url:"/projects/makeathon/6.jpg",caption:""},{url:"/projects/makeathon/7.jpg",caption:""},{url:"/projects/makeathon/8.jpg",caption:""}],text:(0,c.jsxs)("span",{children:["Makeathon is an annual 36-hour physical product design competition that brings college students from all disciplines together to turn their ideas into functional prototypes. At the first Makeathon, 80 students from 6 colleges utilized rapid prototyping tools at TechShop Detroit to build a chair for arthritis sufferers, an extendable skateboard, modular dorm furniture, and more. At Makeathon's conclusion, teams pitched their product to a panel of experts and won $1,000 in awards. Check out some of the press:",(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://www.concentratemedia.com/features/makeathon20140269.aspx",children:"Maker Madness / Concentrate Media"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://www.mlive.com/news/ann-arbor/index.ssf/2014/01/a2awesome_foundation_provides.html",children:"A2Awesome Foundation provides more than 20 $1,000 grants to innovators / MLive"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://markmaynard.com/2014/01/u-m-undergrads-to-launch-makeathon-with-a2awesome-grant/",children:"U-M undergrads to launch Makeathon with A2Awesome grant / Mark Maynard"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{target:"_blank",href:"http://statenews.com/article/2014/02/first-makeathon-competition-at-u-m-to-get-students-creativity",children:"First Makeathon competition at U-M to get students' creativity / The State News"})})]}),(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"My Role:"})," I started and directed the first annual Makeathon, which took place on February 21st to 23rd, 2014. I led a team of 5 to organize event details and fundraise $27k + sponsorships. Makeathon continues every year through the University of Michigan student organization"," ",(0,c.jsx)("a",{target:"_blank",href:"http://mpowered.umich.edu",children:"MPowered Entrepreneurship"}),".",(0,c.jsx)("br",{})," ",(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"Makeathon Team:"})," Soona Amhaz, Sydney Bigelow, Anant Kesavan, Romina Potter, Liz Waldvogel, and Phillip Yang"]})},dch:{name:"DCH Spark",icon:"/projects/dch/icon.jpg",tags:["workshop"],year:2013,images:[{url:"/projects/dch/Housing4.jpg",caption:""},{url:"/projects/dch/Housing2.jpg",caption:""},{url:"/projects/dch/Housing3.jpg",caption:""},{url:"/projects/dch/MagnetSpeaker1.jpg",caption:""},{url:"/projects/dch/MagnetSpeaker2.jpg",caption:""},{url:"/projects/dch/DCHSparkGuide2.jpg",caption:""},{url:"/projects/dch/DCHSparkGuide1.jpg",caption:""},{url:"/projects/dch/DCHSparkLogoInvert.jpg",caption:""}],text:(0,c.jsxs)("span",{children:["What makes a person go from showing initial interest to taking that next step? We wanted to encourage students at Detroit Community High School to ask the same question.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{})," DCH Spark is a series of workshops that aims to build off of students' passion for music and working with their hands by providing resources and a space where students can explore the intersection of music and technology. The projects we developed for DCH Spark involve creating speakers out of magnets and a styrofoam cup and building a finished wooden speaker. We want this program to be a spark for students, igniting a passion for continuous learning and lifelong curiosity.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("u",{children:"The DCH Spark team:"})," Eliza Bara, Beverly Chou, Kathleen Chou, and Michael Wang."]})}},d=function(e){var t=e.updatePage,a=e.updateSelectedItem,o=e.pageState,r=(0,n.useRef)(null),i=(0,n.useRef)(null),s=function(e){r.current.classList.remove("initialSelect"),"work"===e?(a(null),"work"!==o&&t("work"),r.current.classList.remove("deselected"),r.current.classList.add("selected"),i.current.classList.remove("selected"),i.current.classList.add("deselected")):"about"===e&&("about"!==o&&t("about"),i.current.classList.remove("deselected"),i.current.classList.add("selected"),r.current.classList.remove("selected"),r.current.classList.add("deselected"))};return(0,c.jsxs)("div",{className:"header",children:[(0,c.jsx)("div",{className:"name",children:"BEVERLY CHOU"}),(0,c.jsxs)("div",{className:"pages",children:[(0,c.jsx)("div",{ref:r,className:"initialSelect",onClick:function(){return s("work")},children:"WORK"}),(0,c.jsx)("div",{ref:i,onClick:function(){return s("about")},children:"ABOUT"})]})]})},p=[{type:"email",value:"beverly@beverlychou.com",linkSrc:"mailto:beverly@beverlychou.com"},{type:"github",value:"https://github.com/bevchou",linkSrc:"https://github.com/bevchou"},{type:"linkedin",value:"https://www.linkedin.com/in/beverlychou",linkSrc:"https://www.linkedin.com/in/beverlychou/"},{type:"last update",value:"May 11, 2023"}],u=(0,c.jsxs)("span",{children:["I'm a creative technologist and designer. Currently, I'm a design technologist at ",(0,c.jsx)("a",{href:"https://frog.co/",target:"_blank",children:"frog"}),". Previously, I worked at ",(0,c.jsx)("a",{href:"https://intuit.com/",target:"_blank",children:"Intuit"})," and designed custom speakers at ",(0,c.jsx)("a",{href:"http://www.leonspeakers.com/",target:"_blank",children:"Leon"}),". I also got an MPS at NYU's ",(0,c.jsx)("a",{href:"https://tisch.nyu.edu/itp",target:"_blank",children:"Interactive Telecommunications Program"})," and a BSE in mechanical engineering at the University of Michigan. ",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"I am interested in tangible interfaces, ethical technology, overlooked infrastructures, Josef Albers's color theory, electronic device prototyping, and slow jams."]}),h=function(e){var t=e.type,a=e.value,n=e.linkSrc;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"contactItem",children:(0,c.jsx)("div",{className:"type",children:t})}),(0,c.jsx)("div",{className:"contactItem",children:n?(0,c.jsx)("a",{className:"value",href:n,children:a}):(0,c.jsx)("div",{className:"value",children:a})})]})},g=function(e){var t=e.pageState,a=e.updateShowAbout,n=e.updateShowWork;return(0,c.jsxs)("div",{className:"about ".concat("about"===t?"visible":"hidden"),onAnimationEnd:function(){"about"!==t&&(a(!1),n(!0))},children:[(0,c.jsxs)("div",{className:"about-main",children:[(0,c.jsx)("img",{src:"/bev.png"}),(0,c.jsx)("div",{className:"about-text",children:u})]}),(0,c.jsx)("div",{className:"contact",children:p.map(function(e){return(0,c.jsx)(h,{type:e.type,value:e.value,linkSrc:e.linkSrc},e.type)})}),(0,c.jsx)("div",{className:"siteInfo"})]})},m=a(9499),f=function(){return(0,c.jsxs)("svg",{width:"61",height:"61",viewBox:"0 0 61 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("line",{x1:"2.28403",y1:"58.8529",x2:"58.8526",y2:"2.28433",stroke:"black",strokeWidth:"4"}),(0,c.jsx)("line",{x1:"2.28433",y1:"2.28427",x2:"58.8529",y2:"58.8528",stroke:"black",strokeWidth:"4"})]})},j=function(e){var t=e.name,a=e.tags,n=e.year,o=e.icon,r=e.updateSelectedItem,i=e.selected;return(0,c.jsxs)("div",{className:"workItem",onClick:function(){return r(i?null:t)},children:[(0,c.jsx)("img",{src:o}),(0,c.jsx)("div",{className:"name",children:t}),(0,c.jsx)("div",{className:"tags",children:null==a?void 0:a.join(", ")}),(0,c.jsx)("div",{className:"year",children:n}),(0,c.jsx)("div",{className:"indicator",children:i?(0,c.jsx)(f,{}):(0,c.jsx)("div",{className:"dot"})})]})},b=function(){return(0,c.jsx)("svg",{width:"64",height:"30",viewBox:"0 0 64 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M2 13L-1.74846e-07 13L1.74846e-07 17L2 17L2 13ZM63.4142 16.4142C64.1953 15.6332 64.1953 14.3668 63.4142 13.5858L50.6863 0.85786C49.9052 0.0768116 48.6389 0.0768117 47.8579 0.85786C47.0768 1.63891 47.0768 2.90524 47.8579 3.68629L59.1716 15L47.8579 26.3137C47.0768 27.0948 47.0768 28.3611 47.8579 29.1421C48.6389 29.9232 49.9052 29.9232 50.6863 29.1421L63.4142 16.4142ZM2 17L62 17L62 13L2 13L2 17Z",fill:"black"})})},y=function(e){var t,a=e.imgSrcs,o=(0,n.useRef)(),r=function(){scroller&&(t=scroller.getBoundingClientRect().width)};(0,n.useEffect)(function(){return r(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}},[window]);var i=function(e){o&&("forward"===e?o.current.scroll({left:scroller.scrollLeft+t,behavior:"smooth"}):o.current.scroll({left:scroller.scrollLeft-t,behavior:"smooth"}))},s=function(e,t){switch(e){case"vimeo":return(0,c.jsx)("div",{className:"embedVideo",children:(0,c.jsx)("iframe",{src:t,frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})});case"youtube":return(0,c.jsx)("div",{className:"embedVideo",children:(0,c.jsx)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:t,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0})});default:return(0,c.jsx)("img",{src:t,className:"mainImg"})}};return(0,c.jsxs)("div",{className:"imageScroller",id:"scroller",ref:o,children:[null==a?void 0:a.map(function(e,t){return(0,c.jsxs)("div",{className:"imgItem",children:[(0,c.jsxs)("div",{className:"imgCount",children:[t+1,"/",a.length]}),s(e.type,e.url),(0,c.jsxs)("div",{className:"caption",children:[e.caption," "]}),0===t&&(null==a?void 0:a.length)>1&&(0,c.jsx)("div",{className:"mobileNote caption",children:"side scroll for more"})]},t)}),(0,c.jsxs)("div",{className:"arrowNav",children:[(0,c.jsx)("div",{id:"leftArrow",onClick:function(){return i("back")},children:(0,c.jsx)(b,{})}),(0,c.jsx)("div",{id:"rightArrow",onClick:function(){return i("forward")},children:(0,c.jsx)(b,{})})]})]})},v=function(e){var t,a,n,o,r=e.getItemData;return(0,c.jsxs)("div",{className:"workView",children:[(0,c.jsx)("div",{className:"imageContainer",children:(0,c.jsx)(y,{imgSrcs:null===(t=r())||void 0===t?void 0:t.images})}),(0,c.jsx)("div",{className:"textContainer",children:(0,c.jsxs)("div",{className:"text",children:[(0,c.jsx)("div",{children:null===(a=r())||void 0===a?void 0:a.text}),(0,c.jsxs)("div",{className:"mobileOnly tags",children:["tags: ",null===(n=r())||void 0===n?void 0:n.tags.join(", ")]}),(0,c.jsx)("div",{className:"mobileOnly year",children:null===(o=r())||void 0===o?void 0:o.year})]})})]})};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach(function(t){(0,m.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var k=function(e){var t,a,o,r,i,s=e.pageState,d=e.updateShowWork,p=e.updateShowAbout,u=e.updateSelectedItem,h=e.getItemData,g=e.itemState,m=(0,n.useState)({list:!0,project:!1}),f=m[0],b=m[1];return(0,c.jsxs)("div",{className:"work ".concat("work"===s?"visible":"hidden"," ").concat(f.project?"fixedHeight":""),onAnimationEnd:function(){"work"!==s&&(d(!1),p(!0))},children:[f.list&&(0,c.jsx)("div",{className:"listView ".concat(null===g?"visible":"hidden"),onAnimationEnd:function(){null!==g&&b(x(x({},f),{},{list:!1,project:!0}))},children:Object.values(l).map(function(e){return(0,c.jsx)(j,{name:e.name,icon:e.icon,tags:e.tags,year:e.year,selected:!1,updateSelectedItem:u},e.name)})}),f.project&&(0,c.jsxs)("div",{className:"projectView ".concat(null!==g?"visible":"hidden"),onAnimationEnd:function(){null===g&&b(x(x({},f),{},{list:!0,project:!1}))},children:[(0,c.jsx)(j,{name:null===(a=h())||void 0===a?void 0:a.name,icon:null===(o=h())||void 0===o?void 0:o.icon,tags:null===(r=h())||void 0===r?void 0:r.tags,year:null===(i=h())||void 0===i?void 0:i.year,selected:!0,updateSelectedItem:u},null===(t=h())||void 0===t?void 0:t.name),(0,c.jsx)(v,{getItemData:h})]})]})};function S(){var e=(0,n.useState)("work"),t=e[0],a=e[1],o=(0,n.useState)(!1),i=o[0],p=o[1],u=function(e){p(e)},h=(0,n.useState)(!0),m=h[0],f=h[1],j=function(e){f(e)},b=(0,n.useState)(null),y=b[0],v=b[1],w=function(e){v(e),window.scrollTo({top:0,behavior:"smooth"})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r(),{children:[(0,c.jsx)("title",{children:"BEVERLY CHOU"}),(0,c.jsx)("meta",{name:"description",content:"personal website of beverly chou"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)(s(),{async:!0,src:"https://analytics.umami.is/script.js","data-website-id":"1442e61e-21e6-4237-a94d-8dbea440c931"}),(0,c.jsx)(d,{updatePage:function(e){a(e)},pageState:t,updateSelectedItem:w}),(0,c.jsxs)("div",{className:"contentContainer initialLoad",children:[i&&(0,c.jsx)(g,{pageState:t,updateShowAbout:u,updateShowWork:j}),m&&(0,c.jsx)(k,{pageState:t,updateShowWork:j,updateShowAbout:u,updateSelectedItem:w,getItemData:function(){return Object.values(l).find(function(e){return e.name===y})},itemState:y})]})]})}},5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9339)}])},9008:function(e,t,a){e.exports=a(1597)},4298:function(e,t,a){e.exports=a(6718)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);