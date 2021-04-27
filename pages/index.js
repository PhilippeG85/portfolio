import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Menu from '../components/Menu'
import Hello from '../components/Hello'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Philippe Gonse | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu>
        <Hello />
        <AboutMe />
        <Projects />
      </Menu>
    </div>
  )
}
