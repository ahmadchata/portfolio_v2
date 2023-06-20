import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
