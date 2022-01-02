import { Layout } from '../components';
import '../styles/globals.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
