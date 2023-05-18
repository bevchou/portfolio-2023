import React from "react";
import ImageScroller from "./ImageScroller";

const WorkView = ({ getItemData, updateSelectedItem }) => {
  return (
    <div className="workView">
      <div className="imageContainer">
        <ImageScroller imgSrcs={getItemData()?.images} />
      </div>
      <div className="textContainer">
        <div className="text">
          <div>{getItemData()?.text}</div>
          <div className="mobileOnly tags">
            tags: {getItemData()?.tags.join(", ")}
          </div>
          <div className="mobileOnly year">{getItemData()?.year}</div>
          <div className="mobileOnly mobileNav">
            <span className="back" onClick={() => updateSelectedItem(null)}>
              back
            </span>
            <span
              className="top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              top
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkView;
