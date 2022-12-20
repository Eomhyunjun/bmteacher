import GlobalHeader from "../components/GlobalHeader";
import HeadMeta from "../components/HeadMeta";
import PageWrapper from "../components/PageWrapper";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <HeadMeta />
      <GlobalHeader />
      <Component {...pageProps} />
      <Analytics />
    </PageWrapper>
  );
}

export default MyApp;
