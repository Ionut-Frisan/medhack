import MedInput from "../../components/input/MedInput.jsx";
import MedModal from "../../components/modal/MedModal.jsx";
import {useState} from "react";
import UserImage from "../../components/user-image/UserImage.jsx";
import MedButton from "../../components/button/MedButton";
import "./ChildModal.scss"
import useRequest from "../../hooks/useRequest.js";
import DatePicker from "react-datepicker";

function ChildModal({isModalOpen, closeButtonCallback, children}){

    const [firstName, setFirstName] = useState(children.firstName);
    const [lastName, setLastName] = useState(children.lastName);
    const [dateOfBirth, setDateOfBirth] = useState(children.dateOfBirth);
    const [gender, setGender] = useState(children.gender);
    const [cnp, setCnp] = useState(children.cnp);
    const [permanentResidence, setPermanentResidence] = useState(children.permanentResidence);
    const [currentResidence, setCurrentResidence] = useState(children.currentResidence);
    const [secondParentFirstName, setSecondParentFirstName] = useState(children.secondParentFirstName);
    const [secondParentLastName, setSecondParentLastName] = useState(children.secondParentLastName);
    const [parentId, setParentId] = useState('')
    const {put} = useRequest();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            firstName,
            lastName,
            dateOfBirth,
            gender,
            cnp,
            permanentResidence,
            currentResidence,
            secondParentFirstName,
            secondParentLastName
        }
        console.log("Id copil" + children.id)
        const res = await put(`/api/child/${children.id}`, {data: body});
        console.log(res.data)
        closeButtonCallback();
    }

    const handleDateChange = (date) => {
        setDateOfBirth(date);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div>
            <MedModal
                isOpen={isModalOpen}
                title={firstName + " " + lastName}
                closeButtonCallback={closeButtonCallback}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <UserImage src="https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000" alt="Child profile picture"/>
                        <MedInput labelPosition={'float'}
                                  label={'NUMELE'}
                                  value={lastName}
                                  size={'large'}
                                  onChange={(e) => setLastName(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'PRENUMELE'}
                                  value={firstName}
                                  size={'large'}
                                  onChange={(e) => setFirstName(e.target.value)}
                        />
                        <DatePicker placeholder="DATA NASTERII"
                                    dateFormat={"yyyy-MM-dd"}
                                    selected={new Date(dateOfBirth)}
                                    onChange={handleDateChange}
                        />
                        <select className={"gender-dropdown"}
                                placeholder={"SEXUL"}
                                defaultValue={gender}
                                onChange={handleGenderChange}
                        >
                            <option value={"feminin"}>FEMININ</option>
                            <option value={"masculin"}>MASCULIN</option>
                        </select>
                        <MedInput labelPosition={'float'}
                                  label={'CNP'}
                                  value={cnp}
                                  size={'large'}
                                  onChange={(e) => setCnp(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'DOMICILIUL STABIL'}
                                  value={permanentResidence}
                                  size={'large'}
                                  onChange={(e) => setPermanentResidence(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'DOMICILIUL ACTUAL'}
                                  value={currentResidence}
                                  size={'large'}
                                  onChange={(e) => setCurrentResidence(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'NUME PARINTE'}
                                  value={secondParentLastName}
                                  size={'large'}
                                  onChange={(e) => setSecondParentLastName(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'PRENUME PARINTE'}
                                  value={secondParentFirstName}
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
                </form>
            </MedModal>
        </div>
    )
}

export default ChildModal;