import React from "react";

const ImageScroller = ({ imgSrcs }) => {
  return (
    <div className="imageScroller">
      {imgSrcs.map((data, index) => (
        <div className="imgItem">
          <div className="imgCount">
            {index + 1}/{imgSrcs.length}
          </div>
          <img src={data.url} className="mainImg" />
          <div className="caption">{data.caption} </div>
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
