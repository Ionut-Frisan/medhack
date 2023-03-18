import Card from "../../components/card/Card";

function MiniVaccine(props){

    return(
        <div>
            <Card>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.age}
                </div>
                <div>

                </div>

            </Card>
        </div>

    )
}

export default MiniVaccine