import Card from "../../components/card/Card";
import MiniVaccine from "./MiniVaccine";
import {useEffect, useState} from "react";
import VaccineDictionary from "../VaccineDictionary/VaccineDictionary";

function MiniVaccineList() {
    const [miniVaccineList, setMiniVaccineList] = useState([]);
    const {get} = useState();

    async function getAllChildVaccine(){
        const res = await get('/api/child_vaccine/all')
        setMiniVaccineList(res.data)
    }

    useEffect( ()=>{
        getAllChildVaccine().then();

    }, [])

    const vaccineList = miniVaccineList.map(vaccine =>
        <MiniVaccine key={vaccine.id}
                     id={vaccine.id}
                     name={vaccine.name}
                     description={vaccine.description}
                     childVaccineDate={vaccine.childVaccineDate}
                     dateWhenDone={vaccine.dateWhenDone}
                     isDone={vaccine.isDone}
        />);

    return(
        <Card>
            {vaccineList}
        </Card>
    )
}
export default MiniVaccineList