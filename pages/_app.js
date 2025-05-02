import '@/styles/globals.css'
import '@/styles/globals.css';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
