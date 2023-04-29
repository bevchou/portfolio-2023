import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import '@/styles/home.scss';

import Header from '@/components/header';



export default function Home() {

  const [pageState, setPageState] = useState("work");

  const updatePage = (newPage) => {
    setPageState(newPage);
  }

  return (
    <>
      <Head>
        <title>BEVERLY CHOU</title>
        <meta name="description" content="personal website of beverly chou" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`main`}>
      <Header updatePage={updatePage} pageState={pageState}/>
      </main>
    </>
  )
}
