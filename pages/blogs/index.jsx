import fs from 'fs';
import Link from 'next/link';

const blog = ({ blogs }) => {

    return (
        <div>
            <ul>
                {blogs.map(blog => <li key={blog}>
                    <Link as={`/blogs/${blog}`} href='/blogs/[slug]'>
                        <a>
                            {blog}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {

    const files = fs.readdirSync('mdData');
    const blogs = files.map(filename => filename.replace('.md', ''));

    return {
        props: {
            blogs
        }
    }
}

export default blog


