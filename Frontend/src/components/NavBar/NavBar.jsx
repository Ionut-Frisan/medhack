import {useState} from "react";
import {FaMedrt} from "react-icons/fa";
import Link from "../router/Link.jsx";
import MedButton from "../button/MedButton.jsx";
import Burger from "./Burger.jsx";
import './NavBar.scss';
import {useSelector} from "react-redux";
import {getAuthStatus, getRole, logout} from "../../store/featutres/auth/auth-slice.js";
import Dropdown from "../dropdown/Dropdown.jsx";
import {useNavigate} from "react-router-dom";

const NavBar = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = useSelector(getAuthStatus);
    const role = useSelector(getRole);
    const navigate = useNavigate();
    const options = [
        {
            action: () => console.warn('Clicked from dropdown'),
            label: 'Log out'
        }
    ]
    const toggleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return !isLoggedIn ? (
        <nav className={'navbar'}>
            <FaMedrt/>
            <ul className={'navbar-links'}>
                <li>
                    <Link to="/vaccines">Vaccine list</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
            </ul>
            <ul className={'navbar-actions'}>
                <li>
                    <MedButton
                        label="Log in"
                        variant={'primary'}
                        outlined
                        circle
                        onClick={() => navigate('/login')}
                    />
                </li>
                <li>
                    <MedButton
                        label="Sign up"
                        variant={'primary'}
                        circle
                        onClick={() => navigate('/sign-up')}
                    />
                </li>
            </ul>
            <Burger onClick={toggleOpen} open={isOpen}/>
            <ul className={`navbar-menu ${isOpen ? 'navbar-menu__open' : ''}`}>
                <li>
                    <Link to="/vaccines">Vaccine list</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/">Log in</Link>
                </li>
                <li>
                    <Link to="/">Sign up</Link>
                </li>
            </ul>
        </nav>
    ) : (
        <nav className={'navbar'}>
            <FaMedrt/>
            <ul className={'navbar-links'}>
                {
                    role === 'doctor' ? (
                        <>
                            <li>
                                <Link to="/">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/">Patients</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/">Children</Link>
                            </li>
                            <li>
                                <Link to="/">My profile</Link>
                            </li>
                        </>
                    )
                }
            </ul>
            <ul className={'navbar-actions'}>
                <Dropdown options={options}></Dropdown>
            </ul>
            <Burger onClick={toggleOpen} open={isOpen}/>
            <ul className={`navbar-menu ${isOpen ? 'navbar-menu__open' : ''}`}>
                {
                    role === 'doctor' ? (
                        <>
                            <li>
                                <Link to="/">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/">Patients</Link>
                            </li>
                            <li>
                                <span onClick={() => logout()}>Logout</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/">Children</Link>
                            </li>
                            <li>
                                <Link to="/">My profile</Link>
                            </li>
                            <li>
                                <span onClick={() => logout()}>Logout</span>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default NavBar;