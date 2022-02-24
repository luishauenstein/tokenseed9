import '../styles/globals.css';
import { Provider } from 'wagmi';
import connectors from '../wagmi-provider-config';

function MyApp({ Component, pageProps }) {
  return (
    <Provider connectors={connectors}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
