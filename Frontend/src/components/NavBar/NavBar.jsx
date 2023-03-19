import {useState} from "react";
import Link from "../router/Link.jsx";
import MedButton from "../button/MedButton.jsx";
import Burger from "./Burger.jsx";
import './NavBar.scss';
import {useDispatch, useSelector} from "react-redux";
import {getAuthStatus, getRole, logout as logoutStore} from "../../store/featutres/auth/auth-slice.js";
import Dropdown from "../dropdown/Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/images/Logo_icon_transparent.png";

const NavBar = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = useSelector(getAuthStatus);
    const role = useSelector(getRole);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutStore());
        navigate('/login');
    }
    const options = [
        {
            action: () => logout(),
            label: 'Log out'
        }
    ]
    const toggleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return !isLoggedIn ? (
        <nav className={'navbar'}>
            <Link to={'/welcome'}><img className={"logo"} src={logo} alt={"logo"}/></Link>
            <ul className={'navbar-links'}>
                <li>
                    <Link to="/vaccineDictionary">Vaccine dictionary</Link>
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
                    <Link to="/vaccineDictionary">Vaccine dictionary</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign up</Link>
                </li>
            </ul>
        </nav>
    ) : (
        <nav className={'navbar'}>
            <Link to={role === 'doctor' ? '/doctor-home' : '/patient-home'}><img className={"logo"} src={logo} alt={"logo"}/></Link>
            <ul className={'navbar-links'}>
                {
                    role === 'doctor' ? (
                        <>
                            <li>
                                <Link to="/vaccineDictionary">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/medicPatients">Patients</Link>
                            </li>
                            <li>
                                <Link to="/schedule">Schedule</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/vaccineDictionary">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/myChild">Children</Link>
                            </li>
                            <li>
                                <Link to="/messages">Mesaje</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
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
                                <Link to="/vaccineDictionary">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/medicPatients">Patients</Link>
                            </li>
                            <li>
                                <span onClick={() => logout()}>Logout</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/vaccineDictionary">Vaccine dictionary</Link>
                            </li>
                            <li>
                                <Link to="/myChild">Children</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
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