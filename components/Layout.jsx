
import Navbar from './Navbar'

const Layout = ({ children }) => {

    return (
        <div>
            <Navbar menu={children.props.menu} />
            {children}
        </div>
    )
}

export default Layout
