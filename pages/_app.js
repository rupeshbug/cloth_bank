import "@/styles/globals.css";
import Navbar from "../components/Layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
