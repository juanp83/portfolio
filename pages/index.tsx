import Head from 'next/head'
import Hero from '../components/home/Hero/Hero'
import Projects from '../components/home/Projects'
import Technologies from '../components/home/Technologies'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Juan Portillo | Front-End Web Developer | Erie, Colorado</title>
        <meta name="description" content="Juan Portillo is a front-end web developer with expertise in React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <Technologies />
      <Projects /> */}
    </div>
  );
}
