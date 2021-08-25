import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../comps/Navbar"
import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta keywords="ninja"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt ex commodi blanditiis quasi, veritatis quibusdam facere doloremque ea quaerat ratione repellendus aliquam corporis eligendi voluptate atque amet, omnis, neque.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt ex commodi blanditiis quasi, veritatis quibusdam facere doloremque ea quaerat ratione repellendus aliquam corporis eligendi voluptate atque amet, omnis, neque.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div> 
    </>     
  )
}
