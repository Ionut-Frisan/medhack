import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getToken,
  getRole,
  login,
  logout,
} from "../../store/featutres/auth/auth-slice.js";
import '../SignUp/SignUp.scss';
import MedInput from "../../components/input/MedInput.jsx";
import MedButton from "../../components/button/MedButton.jsx";
import Link from "../../components/router/Link.jsx";
import image from "../../assets/images/ilustratie_spital.png";

import useRequest from "../../hooks/useRequest.js";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { post } = useRequest();

  // TODO Razvan: validate

  const onSuccess = (res) => {
    // TODO: Notification
    dispatch(login(res.data));
    res.data?.role === 'parent' ? navigate('/parent-home') : navigate('/medicPatients');
  }

  const onError = (res) => {
    // TODO: Notification
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    }
    const res = await post('/api/user/login', { data: body }, onSuccess, onError);
  }

  return (
    <div className={'flex-2-1'}>
      <div className={'presentation'}>
        <img src={image} />
      </div>
      <form className={'form'} onSubmit={handleSubmit}>
        <h1>App name</h1>
        <MedInput labelPosition={'float'}
          label={'Email'}
          type={'email'}
          size={'large'}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MedInput labelPosition={'float'}
          label={'Password'}
          type={'password'}
          size={'large'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={'log-in-option'}>
          Don't have an account?
          <Link to='/sign-up'> Sign up</Link>
        </span>
        <span className={'divider-horizontal'}></span>
        <MedButton length={'flexible'}
          rounded={false}
          label={'Log in'}
          size={'large'}>
        </MedButton>
      </form>
    </div>
  );
}