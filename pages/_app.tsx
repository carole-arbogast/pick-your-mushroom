import "@fortawesome/fontawesome-svg-core/styles.css";

import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/shared/globalStyle";
import Navbar from "../src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
