import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export const getStaticProps = async () => {
  const dirs = fs.readdirSync('pages');
  const menu = dirs.map(dir => dir.replace('.jsx', ''))
  const pureMenu = menu.filter(m => m !== '_app' && m !== 'api');

  return { props: { menu: pureMenu } };
}

export default MyApp
