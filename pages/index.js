import Head from 'next/head';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Topaz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <Nav/>
      <Header/>
      <main>
        <About/>
        <Services/>
        <Projects/>
      </main>

      <footer className=''>
        
      </footer>
    </div>
  )
}
