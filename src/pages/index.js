import React, { useState } from "react";
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
        />
        <div className="contentContainer initialLoad">
          <About pageState={pageState} />
          <Work
            pageState={pageState}
            updateSelectedItem={updateSelectedItem}
            getItemData={getItemData}
            itemState={itemState}
          />
        </div>
      </main>
    </>
  );
}
