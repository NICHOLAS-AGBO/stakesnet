import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Home from "@components/Home";
import Footer from "@components/Footer";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>STAKERSNET</title>
        <meta name="description" content="StakersNet is a decentralized staking platform
        that provides earning rewards for holders for holding specific cryptocurrencies
        and fiat currencies based in UK." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Home/>
        <Footer/>
    </>
  )
}
