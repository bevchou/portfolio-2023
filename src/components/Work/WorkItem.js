import React from "react";

const WorkItem = ({ name, tags, year }) => {
  const formatTags = (tags) => {
    return tags.join(",");
  };
  return (
    <div className="workItem">
      <img src="https://placekitten.com/100/100" />
      <div className="name">{name}</div>
      <div className="tags">{formatTags(tags)}</div>
      <div className="year">{year}</div>
      <div className="indicator">
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default WorkItem;
