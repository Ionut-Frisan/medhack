import {useEffect, useState} from "react";
import VaccineDictionary from "./VaccineDictionary";
import useRequest from "../../hooks/useRequest";
import MedInput from "../../components/input/MedInput";
import {FaSearch} from "react-icons/fa";

function VaccineDictionaryList() {
    const [vaccineList, setVaccineList] = useState([]);
    const {get} = useRequest();

    useEffect( ()=>{
        async function getAllVaccine(){
            const res = await get('/api/vaccine/all')
            console.log( res.data)
            setVaccineList(res.data)
        }
        getAllVaccine().then();

    }, [])

    const searchVaccine =()=>{
        async function getSearchedVaccine(){
            const res = await get('/api/vaccine/all')
            console.log( res.data)
            setVaccineList(res.data)
        }
        getSearchedVaccine().then();
    }

    const vaccineDictionaryList = vaccineList.map(vaccine =>
        <VaccineDictionary key={vaccine.id}
                           id={vaccine.id}
                           name={vaccine.name}
                           description={vaccine.description}
                           age={vaccine.age}
                           preventedDiseases={vaccine.preventedDiseases}
                           sideEffects={vaccine.sideEffects}
        />);


    return(
        <div className={"vaccine-card"}>
            <div className={"search-bar"}>
                <MedInput placeholder={"Caută Vaccin"} length={"small"} size={"large"} endIcon={FaSearch}
                          rounded={true}/>
            </div>
            <div>
                {vaccineDictionaryList}
            </div>
        </div>

    )

}
export default VaccineDictionaryList