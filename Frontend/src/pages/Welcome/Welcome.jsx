import "./Welcome.scss"
import MedButton from "../../components/button/MedButton"
import {useNavigate} from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const redirectVaccineDictionary = () => {
        navigate('/vaccineDictionary');
    }

    return (
        <div className={"welcome-page"}>
            <div className={"welcome-text"}>
                <div className={"welcome-title"}>
                    <h1 className={"font-link-title"}>
                        Bine ați venit pe site-ul nostru de
                        <h2 className={"welcome-title-accent"}> Vaccinare pentru copii!</h2>
                    </h1>
                </div>
                <div className={"description"}>
                    <h1 className={"font-link-description"}>
                        Ca părinți, știm cât de important este să ne menținem copiii sănătoși și în siguranță.
                        Un mod prin care putem face acest lucru este asigurându-ne că aceștia primesc vaccinurile
                        recomandate.
                    </h1>
                </div>
                <MedButton onClick={redirectVaccineDictionary} className={"font-link-description"} label={"Informează-te"} circle={true} variant="primary" size="large"/>
            </div>
        </div>

    )
}

export default Welcome;