import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body style={{ 
            background: 'linear-gradient(315deg, rgba(54,89,129,1) 0%, rgba(103,171,249,1) 100%)'
          }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
