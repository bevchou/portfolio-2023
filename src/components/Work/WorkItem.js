import React from "react";

import CloseIcon from "@/assets/closeIcon";

const WorkItem = ({ name, tags, year, openSelectedItem, selected }) => {
  const formatTags = (tags) => {
    return tags.join(", ");
  };
  return (
    <div className="workItem" onClick={() => openSelectedItem(selected ? null : name)}>
      <img src="https://placekitten.com/100/100" />
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
