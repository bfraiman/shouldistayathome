import React from "react";
import Head from "next/head";
import { IS_ALLOWED } from "../helpers/constans";
import Widget from "../components/widget";

class Page extends React.Component {
  static async getInitialProps() {
    return { isAllowed: IS_ALLOWED };
  }

  render() {
    return (
      <>
        <Head>  
          {/* <link
            rel="icon"
            type="image/png"
            href={
              this.props.isAllowed ? "https://shouldistayathome.today/dots-red.png" : "https://shouldistayathome.today/dots.png"
            }
            sizes="32x32"
          />
          <meta
            property="og:image"
            content={this.props.isAllowed ? "https://shouldistayathome.today/no.png" : "https://shouldistayathome.today/yes.png"}
          /> */}
          <title>Should I Stay at Home TODAY?</title>
        </Head>
        <div className='wrapper'>
          <Widget />
        </div>
      </>
    );
  }
}

export default Page;
