import "../styles/globals.css";
import type { AppProps } from "next/app";
import MyMainMenu from "../Components/NabBar";
import Footer from "../Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyMainMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
