import React from 'react'
import Spotlight from './_components/spotlight'
import Head from 'next/head'
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
    </div>
  )
}
