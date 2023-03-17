import "./Welcome.scss"
import image from "../../assets/images/ilustratie_-_informare_despre_vaccin.svg"

function Welcome() {
    return (
        <div className={"welcome-page"}>
            <div className={"welcome-text"}>
                <div className={"welcome-title"}>
                    <h1 className={"font-link"}>
                        Bine ați venit pe site-ul nostru de
                        <h2> Vaccinare pentru copii!</h2>
                    </h1>
                </div>
                <div className={"description"}>
                    <h1 className={"font-link"}>
                        Ca părinți, știm cât de important este să ne menținem copiii sănătoși și în siguranță.
                        Un mod prin care putem face acest lucru este asigurându-ne că aceștia primesc vaccinurile
                        recomandate.
                    </h1>
                </div>
            </div>

            <img src={image} alt={"welcome-illustration"}/>
        </div>

    )
}

export default Welcome;