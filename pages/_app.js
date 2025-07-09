import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const publicPages = ['/', '/sign-in', '/sign-up'];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        // Protect private pages
        <Component {...pageProps} />
      )}
    </ClerkProvider>
  );
}

export default MyApp;
