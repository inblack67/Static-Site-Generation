
import Link from 'next/link'

const Navbar = ({ menu }) => {

    return (
        <div>
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

export default Navbar
