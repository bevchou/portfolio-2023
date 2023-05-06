import React, { useState } from "react";

import WorkItem from "./WorkItem";
import WorkView from "./WorkView";
import { workData } from "@/workData";

const Work = ({
  pageState,
  updateShowWork,
  updateShowAbout,
  updateSelectedItem,
  getItemData,
  itemState,
}) => {
  const [showView, setShowView] = useState({
    list: true,
    project: false,
  });
  return (
    <div
      className={`work ${pageState === "work" ? "visible" : "hidden"}`}
      onAnimationEnd={() => {
        if (pageState !== "work") {
          // work fade out
          updateShowWork(false);
          updateShowAbout(true);
        }
      }}
    >
      {/* show all if nothing selected
      or show the selected item */}
      {itemState === null ? (
        <div className="listView">
          {Object.values(workData).map((item) => (
            <WorkItem
              key={item.name}
              name={item.name}
              tags={item.tags}
              year={item.year}
              selected={false}
              updateSelectedItem={updateSelectedItem}
            />
          ))}{" "}
        </div>
      ) : (
        <div className="projectView">
          <WorkItem
            key={getItemData().name}
            name={getItemData().name}
            tags={getItemData().tags}
            year={getItemData().year}
            selected={true}
            updateSelectedItem={updateSelectedItem}
          />
          <WorkView getItemData={getItemData} />
        </div>
      )}
    </div>
  );
};

export default Work;
