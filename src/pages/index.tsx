import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import styles from "@styles/Home.module.scss"

import { Header } from "@components/Header"
import { Intro } from "@blocks/Intro"
import { Loader } from "@components/blocks/Loader"
import { Separator } from "@components/Separator"
import { Biography } from "@components/blocks/Biography"
import { Projects } from "@components/blocks/Projects"
import { HardSkills } from "@components/blocks/HardSkills"
import { Contacts } from "@components/blocks/Contacts"

const Home: NextPage = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <Loader />

  return (
    <div className={styles.container}>
      <Head>
        <title>saizaax.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Separator />

        <Biography />
        <Separator />
        
        <Projects />
        <Separator />
        
        <HardSkills />
        <Separator />

        <Contacts />
      </main>
    </div>
  )
}

export default Home
