import React, { useState } from "react";
import Head from "next/head";

import { workData } from "@/workData";

import Header from "@/components/Header";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";

export default function Home() {
  // update work/about page selection
  const [pageState, setPageState] = useState("work");

  const [aboutMounted, setAboutMounted] = useState(false);
  const updateAboutMounted = (bool) => {
    setAboutMounted(bool);
  };
  const [workMounted, setWorkMounted] = useState(true);
  const updateWorkMounted = (bool) => {
    setWorkMounted(bool);
  };

  const updatePage = (newPage) => {
    console.log(newPage);
    setPageState(newPage);
  };

  // set which portfolio piece to show
  const [itemState, setItemState] = useState(null);

  // update which portfolio page is showing
  const updateSelectedItem = (newItem) => {
    setItemState(newItem);
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
      <main className={`main`}>
        <Header
          updatePage={updatePage}
          pageState={pageState}
          updateSelectedItem={updateSelectedItem}
          updateAboutMounted={updateAboutMounted}
          aboutMounted={aboutMounted}
          updateWorkMounted={updateWorkMounted}
          workMounted={workMounted}
        />
        <div className="contentContainer initialLoad">
          {pageState === "about" && (
            <About
              pageState={pageState}
              aboutMounted={aboutMounted}
              updatePage={updatePage}
              updateWorkMounted={updateWorkMounted}
              workMounted={workMounted}
            />
          )}

          {pageState === "work" && (
            <Work
              workMounted={workMounted}
              pageState={pageState}
              updatePage={updatePage}
              updateSelectedItem={updateSelectedItem}
              getItemData={getItemData}
              itemState={itemState}
              updateAboutMounted={updateAboutMounted}
              aboutMounted={aboutMounted}
            />
          )}
        </div>
      </main>
    </>
  );
}
