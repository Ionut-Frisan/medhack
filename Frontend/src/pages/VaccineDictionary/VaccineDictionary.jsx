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
    return (
        <div className={"vaccine-card"}>
            <div>
                <CardHeader>
                    <div className={"card-header-elements"}>
                        <div>
                            <h1>
                                {props.name}
                            </h1>
                            <h2>
                                {props.age} luni
                            </h2>
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
                        <br/>
                        <div>
                            {props.age} luni
                        </div>
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