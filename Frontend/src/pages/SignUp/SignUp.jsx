import {useState} from "react";

import '../../assets/style/pages/signup.scss';
import MedButton from "../../components/button/MedButton.jsx";
import MedInput from "../../components/input/MedInput.jsx";
import Link from "../../components/router/Link.jsx";

import image from "../../assets/images/10132.jpg";

const SignUp = () => {
    return (
        <div className={'flex-2-1'}>
            <div className={'presentation'}>
                <img src={image}/>
            </div>
            <div className={'form'}>
                <h2>App name</h2>
                <MedInput labelPosition={'float'}
                          label={'First name'}
                          size={'large'}
                />
                <MedInput labelPosition={'float'}
                          label={'Last name'}
                          size={'large'}
                />
                <MedInput labelPosition={'float'}
                          label={'Email'}
                          type={'email'}
                          size={'large'}
                />
                <MedInput labelPosition={'float'}
                          label={'Phone number'}
                          type={'tel'}
                          size={'large'}
                />
                <MedInput labelPosition={'float'}
                          label={'Password'}
                          type={'password'}
                          size={'large'}
                />
                <MedInput labelPosition={'float'}
                          label={'Confirm password'}
                          type={'password'}
                          size={'large'}
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
            </div>
        </div>
    );
}

export default SignUp;