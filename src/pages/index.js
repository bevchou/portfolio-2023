import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import { workData } from "../workData";

import Header from "../components/Header";
import About from "../components/About/About";
import Work from "../components/Work/Work";

export default function Home() {
  // update work/about page selection
  const [pageState, setPageState] = useState(null);
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

  useEffect(() => {
    const url = new URL(window.location.href);
    const path = url.pathname.split("/").slice(1);
    const page = path[0];
    if (page.length <= 0 || page === "work") {
      setPageState("work");
      setShowAbout(false);
      setShowWork(true);
    } else if (page === "about") {
      setPageState("about");
      setShowAbout(true);
      setShowWork(false);
    }
  }, []);

  // set which portfolio piece to show
  const [itemState, setItemState] = useState(null);

  // update which portfolio page is showing
  const updateSelectedItem = (newItem) => {
    setItemState(newItem);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <Script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id="1442e61e-21e6-4237-a94d-8dbea440c931"
      ></Script>
      {pageState !== null && (
        <>
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
        </>
      )}
    </>
  );
}
