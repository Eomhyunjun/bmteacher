import GlobalHeader from "../components/GlobalHeader";
import HeadMeta from "../components/HeadMeta";
import PageWrapper from "../components/PageWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <HeadMeta />
      <GlobalHeader />
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MyApp;
