import Head from 'next/head'
import Image from 'next/image'
// import '@/styles/home.scss';

import Header from '@/components/header';



export default function Home() {
  return (
    <>
      <Head>
        <title>BEVERLY CHOU</title>
        <meta name="description" content="personal website of beverly chou" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`main`}>
      <Header />
        <div className="test">hey</div> 
      </main>
    </>
  )
}
