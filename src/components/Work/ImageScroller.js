import React, { useRef, useEffect } from "react";
import Arrow from "@/assets/Arrow";

const ImageScroller = ({ imgSrcs }) => {
  const scrollerRef = useRef();

  let scrollerWidth;
  const updateScrollerWidth = () => {
    if (scroller) {
      scrollerWidth = scroller.getBoundingClientRect().width;
    }
  };

  useEffect(() => {
    updateScrollerWidth();
    window.addEventListener("resize", updateScrollerWidth);
    return () => {
      window.removeEventListener("resize", updateScrollerWidth);
    };
  }, [ window]);

  const handleArrowClick = (direction) => {
    if (scrollerRef) {
      if (direction === "forward") {
        scrollerRef.current.scroll({
          left: scroller.scrollLeft + scrollerWidth,
          behavior: "smooth",
        });
      } else {
        scrollerRef.current.scroll({
          left: scroller.scrollLeft - scrollerWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="imageScroller" id="scroller" ref={scrollerRef}>
      {imgSrcs.map((data, index) => (
        <div className="imgItem" key={index}>
          <div className="imgCount">
            {index + 1}/{imgSrcs.length}
          </div>
          <img src={data.url} className="mainImg" />
          <div className="caption">{data.caption} </div>
        </div>
      ))}

      <div className="arrowNav">
        <div id="leftArrow" onClick={() => handleArrowClick("back")}>
          <Arrow />
        </div>
        <div id="rightArrow" onClick={() => handleArrowClick("forward")}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
