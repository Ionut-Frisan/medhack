import {useState} from "react";
import {FaMedrt} from "react-icons/fa";
import Link from "../router/Link.jsx";
import MedButton from "../button/MedButton.jsx";
import Burger from "./Burger.jsx";
import './NavBar.scss';


const NavBar = ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <nav className={'navbar'}>
            <FaMedrt/>
            <ul className={'navbar-links'}>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/">Programs</Link>
                </li>
                <li>
                    <Link to="/">Contacts</Link>
                </li>
            </ul>
            <ul className={'navbar-actions'}>
                <li>
                    <MedButton
                        label="Log in"
                        variant={'primary'}
                        outlined
                        circle
                    />
                </li>
                <li>
                    <MedButton
                        label="Sign up"
                        variant={'primary'}
                        circle
                    />
                </li>
            </ul>
            <Burger onClick={toggleOpen} open={isOpen}/>
            <ul className={`navbar-menu ${isOpen ? 'navbar-menu__open' : ''}`}>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/">Programs</Link>
                </li>
                <li>
                    <Link to="/">Contacts</Link>
                </li>
                <li>
                    <Link to="/">Log in</Link>
                </li>
                <li>
                    <Link to="/">Sign up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;