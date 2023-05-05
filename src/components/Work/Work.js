import React from "react";

import WorkItem from "./WorkItem";
import { workData } from "@/workData";

const Work = () => {
  return (
    <div className="work">
      {workData.map((item) => (
        <WorkItem name={item.name} tags={item.tags} year={item.year} />
      ))}
    </div>
  );
};

export default Work;