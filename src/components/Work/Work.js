import React, { useState } from "react";

import WorkItem from "./WorkItem";
import WorkView from "./WorkView";
import { workData } from "@/workData";

const Work = ({ updateSelectedItem, getItemData, itemState }) => {
  return (
    <div className="work">
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
