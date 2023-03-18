import MedInput from "../../components/input/MedInput.jsx";
import MedModal from "../../components/modal/MedModal.jsx";
import {useState} from "react";
import UserImage from "../../components/user-image/UserImage.jsx";
import MedButton from "../../components/button/MedButton";
import "./ChildModal.scss"
function ChildModal({isModalOpen, closeButtonCallback}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [cnp, setCnp] = useState('');
    const [permanentResidence, setPermanentResidence] = useState('');
    const [currentResidence, setCurrentResidence] = useState('');
    const [secondParentFirstName, setSecondParentFirstName] = useState('');
    const [secondParentLastName, setSecondParentLastName] = useState('');

    return (
        <div>
            <MedModal
                isOpen={isModalOpen}
                title={firstName + " " + lastName}
                closeButtonCallback={closeButtonCallback}
            >
                <div>
                    <UserImage src="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg" alt="Child profile picture"/>
                    <MedInput labelPosition={'float'}
                              label={'NUMELE'}
                              size={'large'}
                              onChange={(e) => setLastName(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'PRENUMELE'}
                              size={'large'}
                              onChange={(e) => setFirstName(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'DATA NASTERII'}
                              size={'large'}
                              onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'SEXUL'}
                              size={'large'}
                              onChange={(e) => setGender(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'CNP'}
                              size={'large'}
                              onChange={(e) => setCnp(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'DOMICILIUL STABIL'}
                              size={'large'}
                              onChange={(e) => setPermanentResidence(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'DOMICILIUL ACTUAL'}
                              size={'large'}
                              onChange={(e) => setCurrentResidence(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'NUME PARINTE'}
                              size={'large'}
                              onChange={(e) => setSecondParentLastName(e.target.value)}
                    />
                    <MedInput labelPosition={'float'}
                              label={'PRENUME PARINTE'}
                              size={'large'}
                              onChange={(e) => setSecondParentFirstName(e.target.value)}
                    />
                </div>
                <div className={"update-button"}>
                    <MedButton label={"Update"}
                               circle={true}
                               variant={"primary"}
                               size={"medium"}
                    />
                </div>
            </MedModal>
        </div>
    )
}

export default ChildModal;