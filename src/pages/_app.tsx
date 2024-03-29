import type { AppProps } from "next/app";
import "../../styles/globals.css";
import AuthProvider from "../components/authProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
