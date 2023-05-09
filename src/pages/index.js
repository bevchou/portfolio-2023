import React, { useState, useRef } from "react";
import Head from "next/head";

import { workData } from "@/workData";

import Header from "@/components/Header";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";

export default function Home() {
  // update work/about page selection
  const [pageState, setPageState] = useState("work");
  const updatePage = (newPage) => {
    setPageState(newPage);
  };

  // when to show/hide about page
  const [showAbout, setShowAbout] = useState(false);
  const updateShowAbout = (bool) => {
    setShowAbout(bool);
  };
  // when to show/hide work page
  const [showWork, setShowWork] = useState(true);
  const updateShowWork = (bool) => {
    setShowWork(bool);
  };

  // set which portfolio piece to show
  const [itemState, setItemState] = useState(null);

  // update which portfolio page is showing
  const mainRef = useRef();
  const updateSelectedItem = (newItem) => {
    setItemState(newItem);
    // mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    // // setTimeout(() => {
     
    // // }, "300");
  };

  // get data for each portfolio piece
  const getItemData = () => {
    return Object.values(workData).find((item) => item.name === itemState);
  };

  return (
    <>
      <Head>
        <title>BEVERLY CHOU</title>
        <meta name="description" content="personal website of beverly chou" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`} ref={mainRef}>
        <Header
          updatePage={updatePage}
          pageState={pageState}
          updateSelectedItem={updateSelectedItem}
        />
        <div className="contentContainer initialLoad">
          {showAbout && (
            <About
              pageState={pageState}
              updateShowAbout={updateShowAbout}
              updateShowWork={updateShowWork}
            />
          )}

          {showWork && (
            <Work
              pageState={pageState}
              updateShowWork={updateShowWork}
              updateShowAbout={updateShowAbout}
              updateSelectedItem={updateSelectedItem}
              getItemData={getItemData}
              itemState={itemState}
            />
          )}
        </div>
      </main>
    </>
  );
}
