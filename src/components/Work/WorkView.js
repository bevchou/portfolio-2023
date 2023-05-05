import React from "react";
import ImageScroller from "./ImageScroller";

const WorkView = ({ getItemData }) => {
  return (
    <div className="workView">
      <div className="imageContainer">
        <ImageScroller imgSrcs={getItemData().images} />
      </div>
      <div className="textContainer">
        <div className="text">
          <div>{getItemData().text}</div>
          <div className="mobileOnly tags">
            tags: {getItemData().tags.join(", ")}
          </div>
          <div className="mobileOnly year">{getItemData().year}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkView;
