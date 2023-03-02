import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
