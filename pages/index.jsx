import Link from 'next/link';
import fs from 'fs';

const index = ({ menu }) => {

  console.log(menu);

  return (
    <div>
      <h1>home</h1>
      <ul>
        {menu.map((m, i) => <li key={i}>
          <Link href={m === 'index' ? `/` : `/${m}`}>
            <a>
              {m === 'index' ? 'home' : m}
            </a>
          </Link>
        </li>)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const dirs = fs.readdirSync('pages');
  const menu = dirs.map(dir => dir.replace('.jsx', ''))
  const pureMenu = menu.filter(m => m !== '_app' && m !== 'api');

  return { props: { menu: pureMenu } };
}

export default index;