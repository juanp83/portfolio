import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import SimpleHeader from '../components/SimpleHeader/SimpleHeader';
import { theme } from "../theme";

const links = [
  {link: '/', label: 'Home'},
  // {link: '/blog', label: 'Blog'},
  {link: '/resume', label: 'Resume'}
]

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <SimpleHeader links={links} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
