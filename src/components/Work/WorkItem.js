import React from "react";

import CloseIcon from "../../assets/CloseIcon";

const WorkItem = ({ name, tags, year, icon, updateSelectedItem, selected }) => {
  const formatTags = (tags) => {
    return tags?.join(", ");
  };
  return (
    <div
      className="workItem"
      onClick={() => updateSelectedItem(selected ? null : name)}
    >
      <img src={icon} />
      <div className="name">{name}</div>
      <div className="tags">{formatTags(tags)}</div>
      <div className="year">{year}</div>
      <div className="indicator">
        {selected ? <CloseIcon /> : <div className="dot"></div>}
      </div>
    </div>
  );
};

export default WorkItem;
