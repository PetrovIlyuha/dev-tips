import 'antd/dist/antd.css';
import App from 'next/app';
import '../styles/styles.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
