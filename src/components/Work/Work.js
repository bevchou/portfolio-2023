import React, { useState } from "react";

import WorkItem from "./WorkItem";
import WorkView from "./WorkView";
import { workData } from "@/workData";

const Work = () => {
  const [itemState, setItemState] = useState(workData.tangibleController.name);
    // const [itemState, setItemState] = useState(null);

  const openSelectedItem = (newItem) => {
    console.log(newItem);
    setItemState(newItem);
  };

  const getItemData = () => {
    return Object.values(workData).find((item) => item.name === itemState);
  };

  return (
    <div className="work">
      {itemState === null ? (
        Object.values(workData).map((item) => (
          <WorkItem
            name={item.name}
            tags={item.tags}
            year={item.year}
            selected={false}
            openSelectedItem={openSelectedItem}
          />
        ))
      ) : (
        <>
          <WorkItem
            name={getItemData().name}
            tags={getItemData().tags}
            year={getItemData().year}
            selected={true}
            openSelectedItem={openSelectedItem}
          />
          <WorkView />
        </>
      )}
    </div>
  );
};

export default Work;
