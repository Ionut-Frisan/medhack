import CardHeader from "../../components/card-header/CardHeader";
import arrow from "../../assets/images/arrow.png";
import CardBody from "../../components/card-body/CardBody";
import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest";
import MedButton from "../../components/button/MedButton";

function MedicPatient(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [parentName, setParentName] = useState("");
    const {get} = useRequest();

    const clickArrow = () => {
        if (isOpen === false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    async function getParentById(id) {
        const res = await get(`/api/parent/${id}`)
        const parentFirstName = res.data.firstName
        const parentLastName = res.data.lastName

        return parentFirstName + " " + parentLastName;
    }

    useEffect(() => {
        getParentById(props.parentId).then(name => setParentName(name));
    }, []);

    const calculateAge = (dateOfBirth) => {
        console.log(typeof dateOfBirth)
        const today = new Date()
        let age_now = today.getFullYear() - new Date(dateOfBirth).getFullYear();
        const months = today.getMonth() - new Date(dateOfBirth).getMonth();
        if (months < 0 || (months === 0 && today.getDate() < new Date(dateOfBirth).getDate())) {
            age_now--;
        }
        if (age_now < 1) {
            const month_now = today.getMonth() - new Date(dateOfBirth).getMonth();
            if (month_now === 0) {
                return "Mai puțin de o lună";
            } else if (month_now === 1) {
                return month_now + " lună";
            } else {
                return month_now + " luni";
            }
        }
        if (age_now === 1) {
            return age_now + " an";
        } else {
            return age_now + " ani";
        }
    }

    return (
        <div className={"patient-card"}>
            <div onClick={clickArrow}>
                <CardHeader >
                    <div className={"card-header-elements"}>
                        <div>
                            <h1>
                                {props.firstName} {props.lastName}
                            </h1>
                            <h2>
                                {parentName}
                            </h2>
                        </div>
                        <div className={"comp"}>
                            <MedButton className={"vaccine-button"} circle={true} label={"Vaccinuri"}/>
                            {!isOpen ?
                                <img className={"arrow-image"} src={arrow} alt={"arrow image"} onClick={clickArrow}/>
                                : <img className={"arrow-transition"} src={arrow} alt={"arrow image"} onClick={clickArrow}/>
                            }
                        </div>

                    </div>
                </CardHeader>
                {isOpen === true &&
                <CardBody>
                    <div className={"card-body-elements"}>
                        <div>
                            Vârstă: {calculateAge(props.dateOfBirth)}
                        </div>
                        <div>
                            Data nașterii: {props.dateOfBirth}
                        </div>
                        <div>
                            Gen: {props.gender}
                        </div>
                        <div>
                            CNP: {props.cnp}
                        </div>
                        <div>
                            Părinți: {parentName} și {props.secondParentFirstName} {props.secondParentLastName}
                        </div>
                        <div>
                            Domiciliu stabil: {props.permanentResidence}
                        </div>
                        <div>
                            Domiciliu actual: {props.currentResidence}
                        </div>
                    </div>
                </CardBody>}
            </div>
        </div>
    )
}

export default MedicPatient