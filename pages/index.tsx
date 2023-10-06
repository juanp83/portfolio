import Head from 'next/head'
import Hero from '../components/home/Hero/Hero'
import Projects from '../components/home/Projects'
import Technologies from '../components/home/Technologies/Technologies'

export default function IndexPage() {
  return (
    <div style={{ background: 'linear-gradient(315deg, rgba(54,89,129,1) 0%, rgba(103,171,249,1) 100%)' }}>
      <Head>
        <title>Juan Portillo | Front-End Web Developer | Erie, Colorado</title>
        <meta name="description" content="Juan Portillo is a front-end web developer with expertise in React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Technologies />
      {/* <Projects /> */}
    </div>
  );
}
