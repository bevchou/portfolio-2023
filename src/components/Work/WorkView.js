import React from "react";
import ImageScroller from "./ImageScroller";

const WorkView = ({ getItemData }) => {
  return (
    <div className="workView">
      <div className="imageContainer">
        <ImageScroller imgSrcs={getItemData().images} />
      </div>
      <div className="textContainer">
        <div className="text">{getItemData().text}</div>
      </div>
    </div>
  );
};

export default WorkView;
