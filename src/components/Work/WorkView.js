import React from "react";
import { workData } from "@/workData";

const WorkView = ({ getItemData }) => {
  return (
    <div className="workView">
      <div className="images">hey</div>
      <div className="textContainer">
        <div className="text">{getItemData().text}</div>
      </div>
    </div>
  );
};

export default WorkView;
