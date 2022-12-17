import GlobalHeader from "../components/GlobalHeader";
import PageWrapper from "../components/PageWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <GlobalHeader />
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MyApp;
