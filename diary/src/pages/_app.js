import '@/styles/globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_KEY}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
