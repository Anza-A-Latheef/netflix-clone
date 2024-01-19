import React from 'react'
import Spotlight from './_components/spotlight'
import Ontv from './_components/ontv'
import Head from 'next/head'
import Download from './_components/download'
import Footer from './_components/footer'

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spotlight/>
      <Ontv/>
      <Download/>
      <Footer/>
    </div>
  )
}
