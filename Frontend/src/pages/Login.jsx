import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken, getRole, login, logout } from "../store/featutres/auth/auth-slice.js";
import Link from "../components/router/Link.jsx";

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(token);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(login());
        (email === 'user@user.com' && password === 'asd') ? navigate('/') : navigate('/doctor');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={emailRef}/>
                <input ref={passwordRef} type="password"/>
                <button> Log in </button>
                <br/>
                <Link to={'/doctor'}>/Doctor</Link>
            </form>
        </div>
    )
}