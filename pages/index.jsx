import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1>home</h1>
      <Link href='/blogs'>
        <a>
          blogs
        </a>
      </Link>
    </div>
  )
}

export default index
