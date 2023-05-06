import React, { useRef } from "react";
import { contactInfo, aboutText } from "@/aboutData";

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

const About = ({
  pageState,
  aboutMounted,
  updatePage,
  updateWorkMounted,
  workMounted,
}) => {
  return (
    <div
      className={`about ${aboutMounted ? "visible" : "hidden"}`}
      onAnimationEnd={() => {
        console.log(aboutMounted, "about mount");
        // if the animation is done, then show work page
        if (!aboutMounted) {
          updatePage("work");
        } else {
          updateWorkMounted(false);
        }
      }}
    >
      <div className="about-main">
        <img src="https://placekitten.com/200/300" />
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
    </div>
  );
};

export default About;
