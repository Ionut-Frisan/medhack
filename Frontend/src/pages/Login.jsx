import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log({ email, password });
        (email === 'user@user.com' && password === 'asd') ? navigate('/') : navigate('/doctorly');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={emailRef}/>
                <input ref={passwordRef} type="password"/>
                <button> Log in </button>
            </form>
        </div>
    )
}