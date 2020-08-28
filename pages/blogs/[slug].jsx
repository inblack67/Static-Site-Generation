import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { Fragment } from 'react';

const blog = ({ data: { title, description }, htmlString }) => {

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div>
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('mdData');
    const paths = files.map(filename => {
        return {
            params: {
                slug: filename.replace('.md', '')
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const mdData = fs.readFileSync(path.join('mdData', slug + '.md'));

    const data = grayMatter(mdData);

    const htmlString = marked(data.content);

    return {
        props: {
            htmlString,
            data: data.data
        }
    }
}

export default blog


