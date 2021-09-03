import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import { GlobalStyle } from "../src/shared/globalStyle";

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
