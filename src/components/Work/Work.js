import React, { useState } from "react";

import WorkItem from "./WorkItem";
import WorkView from "./WorkView";
import { workData } from "@/workData";

const Work = ({
  pageState,
  updateSelectedItem,
  getItemData,
  itemState,
  workMounted,
  updatePage,
  updateAboutMounted,
  aboutMounted,
}) => {
  return (
    <div
      className={`work ${workMounted ? "visible" : "hidden"}`}
      onAnimationEnd={() => {
        console.log(workMounted, "work mount");
        // if the animation is done, then show work page
        if (!workMounted) {
          updatePage("about");
        } else {
          updateAboutMounted(false);
        }
      }}
    >
      {/* show all if nothing selected
      or show the selected item */}
      {itemState === null ? (
        Object.values(workData).map((item) => (
          <WorkItem
            key={item.name}
            name={item.name}
            tags={item.tags}
            year={item.year}
            selected={false}
            updateSelectedItem={updateSelectedItem}
          />
        ))
      ) : (
        <>
          <WorkItem
            key={getItemData().name}
            name={getItemData().name}
            tags={getItemData().tags}
            year={getItemData().year}
            selected={true}
            updateSelectedItem={updateSelectedItem}
          />
          <WorkView getItemData={getItemData} />
        </>
      )}
    </div>
  );
};

export default Work;
