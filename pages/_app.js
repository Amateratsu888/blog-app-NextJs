import "../styles/globals.css";
import Navbar from "../components/navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
