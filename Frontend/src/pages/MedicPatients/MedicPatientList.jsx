import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest";
import "./MedicPatient.scss"
import MedicPatient from "./MedicPatient";
import MedInput from "../../components/input/MedInput";
import {FaSearch} from "react-icons/fa";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice";

function MedicPatientList() {
    const [childList, setChildList] = useState([]);
    const [noChild, setNoChild] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const doctorID = useSelector(getToken);
    const {get} = useRequest();
    async function getAllChildren(){

        const res = await get(`/api/child/searchForMedic/${doctorID}`);
        setChildList(res.data);
        setNoChild(false);
    }

    useEffect( ()=>{
        if(doctorID) {
            getAllChildren().then(() => {
                console.log("Children list fetched")
                setIsLoading(false)
            });
        }
    }, [doctorID])

    const searchPatient =(e)=>{
        if(e.target.value === ""){
            if(doctorID) {
                getAllChildren().then()
            }
        }
        if(e.target.value <= 1)
            return
        async function getSearchedChildren(){
            const res = await get(`/api/child/searchForMedicWithName/${doctorID}/${e.target.value}`)
            setChildList(res.data)
            if(res.data.length === 0){
                setNoChild(true)
            }else{
                setNoChild(false)
            }

        }
        if(e.target.valueOf()){
            if(doctorID) {
                getSearchedChildren().then();
            }
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