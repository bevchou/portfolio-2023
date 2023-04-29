import React from "react";

const Header = ({ updatePage, pageState }) => {
  return (
    <div className="header">
      <div className="name" onClick={() => updatePage("work")}>
        BEVERLY CHOU
      </div>
      <div
        className={`page ${pageState === "work" ? "selected" : ""}`}
        onClick={() => updatePage("work")}
      >
        WORK
      </div>
      <div
        className={`page ${pageState === "about" ? "selected" : ""}`}
        onClick={() => updatePage("about")}
      >
        ABOUT
      </div>
    </div>
  );
};

export default Header;
