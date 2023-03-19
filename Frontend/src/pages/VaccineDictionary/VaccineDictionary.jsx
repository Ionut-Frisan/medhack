import arrow from "../../assets/images/arrow.png";
import "./VaccineDictionary.scss"
import CardHeader from "../../components/card-header/CardHeader";
import CardBody from "../../components/card-body/CardBody";
import {useMemo, useState} from "react";
import Link from "../../components/router/Link";
import {useBELink} from "../../hooks/useBELink";

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
            return "La naștere";
        } else if (numberOfMonths === 1) {
            return numberOfMonths + " lună";
        } else if (numberOfMonths < 12) {
            return numberOfMonths + " luni";
        } else if (numberOfMonths === 12 || numberOfMonths < 24) {
            return parseInt(numberOfMonths / 12) + " an";
        } else {
            return parseInt(numberOfMonths / 12) + " ani";
        }

    }
    const linksComputed = useMemo(() => useBELink(props?.linkDoctor), []);

    return (
        <div className={"vaccine-card"}>
            <div >
                <CardHeader>
                    <div onClick={clickArrow} className={"card-header-elements-click"}>
                        <div>
                            <div className={"text-header"}>
                                {props.name}
                            </div>
                            <div className={"abbreviation"}>
                                {props.abbreviation}
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
                            <h1 className={"label"}>Vârstă administrare: </h1>
                            {calculateAge(props.age)}
                        </div>
                        <div>
                            <h1 className={"label"}>Obligatoriu: </h1>
                            {props.isMandatory ? <div>Da</div> : <div>Nu</div>}
                        </div>
                        <div>
                            <h1 className={"label"}>Descriere: </h1>
                            {props.description}
                        </div>
                        <div>
                            <p><b>Link-uri externe: </b>{linksComputed.map((linkObj, index) => {
                                return linkObj.url ? <><Link to={linkObj.url} key={`external-link-${index}`}
                                                             _blank={true}>{linkObj.label || 'Link extern'}</Link> {index !== linksComputed.length - 1 ?
                                    <b> | </b> : <></>} </> : <span>-</span>
                            })}</p>
                        </div>
                    </div>
                </CardBody>}
            </div>
        </div>
    )
}

export default VaccineDictionary