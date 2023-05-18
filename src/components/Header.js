import React, { useRef, useEffect } from "react";

const Header = ({ updatePage, updateSelectedItem, pageState }) => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  // initial classes
  useEffect(() => {
    if (pageState === "work") {
      workRef.current.classList.add("initialSelect");
      aboutRef.current.classList.add("initialDeselected");
    } else if (pageState === "about") {
      aboutRef.current.classList.add("initialSelect");
      workRef.current.classList.add("initialDeselected");
    }
  }, []);

  const onHeaderClick = (pageName) => {
    // remove all classes
    workRef.current.removeAttribute("class");
    aboutRef.current.removeAttribute("class");

    // update the URL
    history.pushState({ pageName: pageName }, "", `/${pageName}`);

    if (pageName === "work") {
      // reset work page
      updateSelectedItem(null);
      // update page
      if (pageState !== "work") {
        updatePage("work");
      }
      // update classes for header animation
      workRef.current.classList.add("selected");
      aboutRef.current.classList.add("deselected");
    } else if (pageName === "about") {
      // update page
      if (pageState !== "about") {
        updatePage("about");
      }
      // update classes for header sanimation
      aboutRef.current.classList.add("selected");
      workRef.current.classList.add("deselected");
    }
  };

  return (
    <div className="header">
      <div className="name">BEVERLY CHOU</div>

      <div className="pages">
        <div ref={workRef} onClick={() => onHeaderClick("work")}>
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
