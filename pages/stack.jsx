import path from "path";
import fs from 'fs';

const Nav = ({ pages }) => {

    console.log(pages);

    return (
        <nav>

        </nav>
    );
}

export const getStaticProps = async () => {
    let files = fs.readdirSync("./pages");
    const pureFiles = files.filter(filename => filename !== '_app.jsx');
    console.log(pureFiles);
    return {
        props: {
            pages: {},
        },
    };
}

export default Nav;