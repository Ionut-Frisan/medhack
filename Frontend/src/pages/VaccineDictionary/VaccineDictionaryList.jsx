import {useEffect, useState} from "react";
import VaccineDictionary from "./VaccineDictionary";
import useRequest from "../../hooks/useRequest";
import MedInput from "../../components/input/MedInput";
import {FaSearch} from "react-icons/fa";

function VaccineDictionaryList() {
    const [vaccineList, setVaccineList] = useState([]);
    const [noVaccine, setNoVaccine] = useState(false);
    const {get} = useRequest();

    async function getAllVaccine(){
        const res = await get('/api/vaccine/all')
        setVaccineList(res.data)
        setNoVaccine(false)
    }

    useEffect( ()=>{
        getAllVaccine().then();

    }, [])

    const searchVaccine =(e)=>{
        if(e.target.value === ""){
            getAllVaccine().then()
        }
        if(e.target.value <= 1)
            return
        async function getSearchedVaccine(){
            const res = await get(`/api/vaccine/search/${e.target.value}`)
            setVaccineList(res.data)
            if(res.data.length === 0){
                setNoVaccine(true)
            }else{
                setNoVaccine(false)
            }

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
                          rounded={true} onChange={(e)=>searchVaccine(e)}/>
            </div>
            <div>
                {noVaccine && <h1 className={"no-vaccine-message"}>Nu s-a găsit niciun vaccin cu acest nume.</h1>}
                {vaccineDictionaryList}
            </div>
        </div>

    )

}
export default VaccineDictionaryList