import Card from "../../components/card/Card";

function MiniVaccine(props){

    return(
        <div>
            <Card>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.description}
                </div>
                <div>
                    {props.childVaccineDate}
                </div>
                <div>
                    {props.dateWhenDone}
                </div>
                <div>
                    {props.isDone}
                </div>
            </Card>
        </div>

    )
}

export default MiniVaccine