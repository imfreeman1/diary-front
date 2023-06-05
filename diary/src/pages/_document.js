import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="kr">
      <meta name="viewport" content="width=device-width; initial-scale=0.75; maximum-scale=0.75; user-scalable=no;" />
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta
          httpEquiv="Pragma"
          content="no-cache"
        />
        <meta
          httpEquiv="Expires"
          content="0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
