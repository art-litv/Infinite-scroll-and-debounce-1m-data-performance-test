import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import "react-perfect-scrollbar/dist/css/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
