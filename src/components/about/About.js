import React, { useRef } from "react";
import { contactInfo, aboutText, photo } from "../../aboutData";

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

const About = ({ pageState, updateShowAbout, updateShowWork }) => {
  return (
    <div
      className={`about ${pageState === "about" ? "visible" : "hidden"}`}
      onAnimationEnd={() => {
        if (pageState !== "about") {
          // about fade out
          updateShowAbout(false);
          updateShowWork(true);
        }
      }}
    >
      <div className="about-main">
        <img src={photo} />
        <div className="about-text">{aboutText}</div>
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
      <div className="siteInfo"></div>
    </div>
  );
};

export default About;
