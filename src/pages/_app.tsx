import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.css'
import AuthProvider from "../components/authProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
