import React, { useRef } from "react";

const Header = ({
  updatePage,
  updateSelectedItem,
  pageState,
}) => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  const onHeaderClick = (pageName) => {
    workRef.current.classList.remove("initialSelect");
    // updatePage(pageName);
    if (pageName === "work") {
      // reset work page
      updateSelectedItem(null);
      // update page
      if (pageState !== "work") {
        updatePage("work");
      }
      // update classes for header animation
      workRef.current.classList.remove("deselected");
      workRef.current.classList.add("selected");
      aboutRef.current.classList.remove("selected");
      aboutRef.current.classList.add("deselected");
    } else if (pageName === "about") {
      // update page
      if (pageState !== "about") {
        updatePage("about");
      }
      // update classes for header sanimation
      aboutRef.current.classList.remove("deselected");
      aboutRef.current.classList.add("selected");
      workRef.current.classList.remove("selected");
      workRef.current.classList.add("deselected");
    }
  };

  return (
    <div className="header">
      <div className="name">BEVERLY CHOU</div>

      <div className="pages">
        <div
          ref={workRef}
          className="initialSelect"
          onClick={() => onHeaderClick("work")}
        >
          WORK
        </div>
        <div ref={aboutRef} onClick={() => onHeaderClick("about")}>
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default Header;
