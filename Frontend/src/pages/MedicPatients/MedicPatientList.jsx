import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest";
import "./MedicPatient.scss"
import MedicPatient from "./MedicPatient";
import MedInput from "../../components/input/MedInput";
import {FaSearch} from "react-icons/fa";
import MiniVaccine from "./MiniVaccine";

function MedicPatientList() {
    const [childList, setChildList] = useState([]);
    const [noChild, setNoChild] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {get} = useRequest();

    async function getAllChildren(){

        const res = await get('/api/child/all');
        setChildList(res.data);
        setNoChild(false);
    }

    useEffect( ()=>{
        getAllChildren().then(() => {console.log("Children list fetched")
        setIsLoading(false)});
    }, [])

    const searchPatient =(e)=>{
        if(e.target.value === ""){
            getAllChildren().then()
        }
        if(e.target.value <= 1)
            return
        async function getSearchedChildren(){
            const res = await get(`/api/child/search/${e.target.value}`)
            setChildList(res.data)
            if(res.data.length === 0){
                setNoChild(true)
            }else{
                setNoChild(false)
            }

        }
        if(e.target.valueOf()){
            getSearchedChildren().then();
        }
    }

    return(
        <div className={"patient-card"}>
            <div className={"search-bar"}>
                <MedInput placeholder={"Caută Pacient"} length={"small"} size={"large"} endIcon={FaSearch}
                          rounded={true} onChange={(e)=>searchPatient(e)}/>
            </div>

            <div>
                {noChild && <h1 className={"no-patients-message"}>Nu s-a găsit niciun pacient cu acest nume.</h1>}
                {isLoading ?
                    <h1>Loading</h1>
                    : childList.map(child =>
                        <MedicPatient key={child.id}
                                      id={child.id}
                                      firstName={child.firstName}
                                      lastName={child.lastName}
                                      dateOfBirth={child.dateOfBirth}
                                      gender={child.gender}
                                      cnp = {child.cnp}
                                      permanentResidence={child.permanentResidence}
                                      currentResidence={child.currentResidence}
                                      secondParentFirstName={child.secondParentFirstName}
                                      secondParentLastName={child.secondParentLastName}
                                      parentId ={child.parentId}
                        />
                    )}
            </div>

        </div>

    )
}
export default MedicPatientList