import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Menu from '../components/Menu'
import Hello from '../components/Hello'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Philippe Gonse | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Web developer in Montreal, interested in freelance opportunities"
        />
        <meta property="og:title" content="Philippe Gonse | Web developer" />
        <meta property="og:description" content="Web developer in Montreal, interested in freelance opportunities" />
        <meta property="og:site_name" content="Philippe" />
        <meta name="twitter:site" content="@Philippe" />
        <meta name="twitter:title" content="Philippe Gonse | Web developer" />
        <meta name="twitter:description" content="Web developer in Montreal, interested in freelance opportunities" />
        <meta name="twitter:creator" content="@Philippe" />
      </Head>
      <div className='loading' />
      <Menu>
        <Hello />
        <AboutMe />
        <Projects />
        <Contact />
      </Menu>
    </div>
  )
}
