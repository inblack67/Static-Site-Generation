import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1>home</h1>
      <Link href='/blogs/[slug]' as={`/blogs/me`}>
        <a>
          about me
        </a>
      </Link>
    </div>
  )
}

export default index
