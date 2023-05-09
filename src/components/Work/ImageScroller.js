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
  }, [window]);

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

  const renderMedia = (type, url) => {
    switch (type) {
      case "vimeo":
        return (
          <div className="vimeo">
            <iframe
              src={url}
              frameBorder="0"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        );
      case "youtube":
        return (
          <div className="youtube">
            <iframe
              width="100%"
              height="100%"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        );
      default:
        return <img src={url} className="mainImg" />;
    }
  };

  return (
    <div className="imageScroller" id="scroller" ref={scrollerRef}>
      {imgSrcs?.map((data, index) => (
        <div className="imgItem" key={index}>
          <div className="imgCount">
            {index + 1}/{imgSrcs.length}
          </div>
          {renderMedia(data.type, data.url)}
          <div className="caption">{data.caption} </div>
          {(index === 0) && (imgSrcs?.length > 1) && (
            <div className={`mobileNote caption`}>side scroll for more</div>
          )}
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
