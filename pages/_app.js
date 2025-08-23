import '@/styles/globals.css';
// import { ClerkProvider } from '@clerk/nextjs' // TODO: comment in to add Clerk Auth
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PaginationProvider } from '@/context/PaginationContext';

export default function App({ Component, pageProps }) {
  return (
    <PaginationProvider>
      {/* <ClerkProvider> // TODO: comment in to add Clerk Auth */}
      <>
        <NavBar />
        {/* Main grows to fill the viewport so the footer sits at the bottom */}
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
      {/* </ClerkProvider> // TODO: comment in to add Clerk Auth */}
    </PaginationProvider>
  );
}