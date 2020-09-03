import fs from 'fs';

const index = () => {

  return (
    <div>
      home
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
