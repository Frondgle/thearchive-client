import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs' // TODO: comment in to add Clerk Auth
import '@/styles/globals.css';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    // <ClerkProvider> // TODO: comment in to add Clerk Auth
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
    // </ClerkProvider> // TODO: comment in to add Clerk Auth
  );
}
