import {useEffect, useMemo, useState} from "react";
import { useNavigate } from "react-router-dom";

import './SignUp.scss';

import MedButton from "../../components/button/MedButton.jsx";
import MedInput from "../../components/input/MedInput.jsx";
import Link from "../../components/router/Link.jsx";
import Select from 'react-select'

import image from "../../assets/images/ilustratie_spital.png";
import useRequest from "../../hooks/useRequest";


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [doctorId, setDoctorID] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);
    const [doctors, setDoctors] = useState([]);
    
    const {post, get} = useRequest();
    
    const getDoctorList = async () => {
        if(!!doctors.length) return;
        await get('api/doctor/all', {}, ({data}) => setDoctors(data));
    }
    
    // TODO Razvan: validate
    useEffect(() => {getDoctorList().then().catch()}, []);
    const options = useMemo(() => {
        return doctors.map((doctor) => ({
            label: `${doctor.firstName || ''} ${doctor.lastName || ''}`,
            value: doctor.id,
        }));
    }, [doctors]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        };
        if (!isDoctor) body.doctorId = doctorId;
        const url = isDoctor ? '/api/doctor/add' : '/api/parent/add';
        const res = await post(url, {data: body});
    }

    return (
        <div className={'flex-2-1'}>
            <div className={'presentation'}>
                <img src={image}/>
            </div>
            <form className={'form'} onSubmit={handleSubmit}>
                <h1>VaxSoft</h1>
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
                {
                    isDoctor ? <></> : <Select
                    className={'med-select'}
                    placeholder={'Select your doctor'}
                    options={options}
                    required={true}
                    onChange={(option) => setDoctorID(option.value)}
                    ></Select>
                }
                <div className={'checkbox'}>
                    <label>I am a doctor</label>
                    <input type={"checkbox"} onChange={() => setIsDoctor(!isDoctor)} checked={isDoctor}/>
                </div>
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