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

      {showView.list && (
        <div
          className={`listView ${itemState === null ? "visible" : "hidden"}`}
          onAnimationEnd={() => {
            if (itemState !== null) {
              setShowView({
                ...showView,
                list: false,
                project: true,
              });
            }
          }}
        >
          {Object.values(workData).map((item) => (
            <WorkItem
              key={item.name}
              name={item.name}
              tags={item.tags}
              year={item.year}
              selected={false}
              updateSelectedItem={updateSelectedItem}
            />
          ))}
        </div>
      )}

      {showView.project && (
        <div
          className={`projectView ${itemState !== null ? "visible" : "hidden"}`}
          onAnimationEnd={() => {
            if (itemState === null) {
              setShowView({
                ...showView,
                list: true,
                project: false,
              });
            }
          }}
        >
          <WorkItem
            key={getItemData()?.name}
            name={getItemData()?.name}
            tags={getItemData()?.tags}
            year={getItemData()?.year}
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
