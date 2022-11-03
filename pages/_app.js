import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Roboto_Mono, Roboto } from "@next/font/google";
import { CartProvider } from "../context/CartContext";

export const font = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const fontHeading = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  );
}

export default MyApp;
