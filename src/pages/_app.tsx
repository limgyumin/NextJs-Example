import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
