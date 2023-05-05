import React, { useRef } from "react";

const ContactItem = ({ type, value, linkSrc }) => {
  return (
    <>
      <div className="contactItem">
        <div className="type">{type}</div>
      </div>
      <div className="contactItem">
        {linkSrc ? (
          <a className="value" href={linkSrc}>
            {value}
          </a>
        ) : (
          <div className="value">{value}</div>
        )}
      </div>
    </>
  );
};

const contactInfo = [
  {
    type: "email",
    value: "beverly@beverlychou.com",
    linkSrc: "mailto:beverly@beverlychou.com",
  },
  {
    type: "github",
    value: "https://github.com/bevchou",
    linkSrc: "https://github.com/bevchou",
  },
  {
    type: "linkedin",
    value: "https://www.linkedin.com/in/beverlychou",
    linkSrc: "https://www.linkedin.com/in/beverlychou/",
  },
  {
    type: "last update",
    value: "May 4, 2023",
  },
];

const About = ({ pageState }) => {
  return (
    <div className="about">
      <div className="about-main">
        <img src="https://placekitten.com/200/300" />
        <div className="about-text">
          I'm a creative technologist and designer. Currently, I'm a design
          technologist at frog. Previously, I worked at Intuit and designed
          custom speakers at Leon. I also got an MPS at NYU's Interactive
          Telecommunications Program and a BSE in mechanical engineering at the
          University of Michigan. I am interested in tangible interfaces,
          ethical technology, overlooked infrastructures, Josef Albers's color
          theory, electronic device prototyping, Michigan football, and slow
          jams.
        </div>
      </div>
      <div className="contact">
        {contactInfo.map((item) => (
          <ContactItem
            type={item.type}
            value={item.value}
            linkSrc={item.linkSrc}
            key={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
