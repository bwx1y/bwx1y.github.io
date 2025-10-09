import { Link } from "react-scroll";

const NavbarComponent = () => {
    return (<nav>
        <div className="nav-container">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={600}
                        className="cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={600}
                        className="cursor-pointer hover:text-blue-500"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={600}
                        className="cursor-pointer hover:text-blue-500"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        className="cursor-pointer hover:text-blue-500"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>)
}
export default NavbarComponent