import '@/styles/globals.css';
// import { ClerkProvider } from '@clerk/nextjs' TODO: comment in to add Clerk Auth
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PaginationProvider } from '@/context/PaginationContext';

export default function App({ Component, pageProps }) {
  return (
    <PaginationProvider> {/* Wrap the entire app with PaginationProvider */}
      {/* <ClerkProvider> // TODO: comment in to add Clerk Auth */}
      <>
        <NavBar />
        <div className="container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
      {/* </ClerkProvider> // TODO: comment in to add Clerk Auth */}
    </PaginationProvider>
  );
}
