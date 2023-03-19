import arrow from "../../assets/images/arrow.png";
import "./VaccineDictionary.scss"
import CardHeader from "../../components/card-header/CardHeader";
import CardBody from "../../components/card-body/CardBody";
import {useState} from "react";

function VaccineDictionary(props) {
    const [isOpen, setIsOpen] = useState(false)

    const clickArrow = () => {
        if (isOpen === false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const calculateAge = (numberOfMonths) => {
        if (numberOfMonths === 0) {
            return "Mai puțin de o lună";
        } else if (numberOfMonths === 1) {
            return numberOfMonths + " lună";
        } else if (numberOfMonths < 12) {
            return numberOfMonths + " luni";
        } else if (numberOfMonths === 12) {
            return parseInt(numberOfMonths / 12) + " an";
        } else {
            return parseInt(numberOfMonths / 12) + " ani";
        }

    }

    return (
        <div className={"vaccine-card"}>
            <div >
                <CardHeader>
                    <div onClick={clickArrow} className={"card-header-elements-click"}>
                        <div>
                            <div className={"text-header"}>
                                {props.name}
                            </div>
                        </div>
                        {!isOpen ?
                            <img className={"arrow-image"} src={arrow} alt={"arrow image"} onClick={clickArrow}/>
                            : <img className={"arrow-transition"} src={arrow} alt={"arrow image"} onClick={clickArrow}/>
                        }
                    </div>
                </CardHeader>
                {isOpen === true &&
                <CardBody>
                    <div className={"card-body-elements"}>
                        <div>
                            {props.description}
                        </div>
                        {calculateAge(props.age)}
                        <div>
                            {props.preventedDiseases}
                        </div>
                        <div>
                            {props.sideEffects}
                        </div>
                    </div>
                </CardBody>}
            </div>
        </div>
    )
}

export default VaccineDictionary