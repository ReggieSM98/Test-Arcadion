import type { AppProps } from "next/app";
import { Rokkitt } from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/globals.scss";

const rokkitt = Rokkitt({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={rokkitt.className}>
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
