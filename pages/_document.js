import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import HeadElements from "../component/head";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <HeadElements />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/__/firebase/7.14.1/firebase-app.js"></script>
          <script src="/__/firebase/7.14.1/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
