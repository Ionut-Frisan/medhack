import {useState} from "react";

import './SignUp.scss';
import MedButton from "../../components/button/MedButton.jsx";
import MedInput from "../../components/input/MedInput.jsx";
import Link from "../../components/router/Link.jsx";

import image from "../../assets/images/10132.jpg";

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: validate values
        console.warn(firstName);
    }

    return (
        <div className={'flex-2-1'}>
            <div className={'presentation'}>
                <img src={image}/>
            </div>
            <form className={'form'} onSubmit={handleSubmit}>
                <h1>App name</h1>
                <MedInput labelPosition={'float'}
                          label={'First name'}
                          size={'large'}
                          onChange={(e) => setFirstName(e.target.value)}
                />
                <MedInput labelPosition={'float'}
                          label={'Last name'}
                          size={'large'}
                          onChange={(e) => setLastName(e.target.value)}
                />
                <MedInput labelPosition={'float'}
                          label={'Email'}
                          type={'email'}
                          size={'large'}
                          onChange={(e) => setEmail(e.target.value)}
                />
                <MedInput labelPosition={'float'}
                          label={'Phone number'}
                          type={'tel'}
                          size={'large'}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <MedInput labelPosition={'float'}
                          label={'Password'}
                          type={'password'}
                          size={'large'}
                          onChange={(e) => setPassword(e.target.value)}
                />
                <MedInput labelPosition={'float'}
                          label={'Confirm password'}
                          type={'password'}
                          size={'large'}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className={'log-in-option'}>
                    Already have an account?
                    <Link to={'/login'}> Log in</Link>
                </span>
                <span className={'divider-horizontal'}></span>
                <MedButton length={'flexible'}
                           rounded={false}
                           label={'Sign up'}
                           size={'large'}>
                </MedButton>
            </form>
        </div>
    );
}

export default SignUp;