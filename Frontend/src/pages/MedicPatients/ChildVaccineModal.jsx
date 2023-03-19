import ChildPanelContent from "../Child/ChildPanelContent.jsx";
import MedModal from "../../components/modal/MedModal.jsx";
import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";

const ChildVaccineModal = ({isOpen, child, closeModalCallback}) => {
    console.warn({child});
    const [vaccineList, setVaccineList] = useState({});
    const {get, put} = useRequest();
    
    const getVaccineList = async () => {
        if (!child.id) return;
        const {data} = await get(`/api/child_vaccine/${child.id}`, {}, ({data}) => setVaccineList(data));
    }
    
    const updateVaccineState = async (data) => {
        const successCb = () => {
            const cloneVaccines = vaccineList;
            const computedVaccines = cloneVaccines.map((vaccine) => {
                if (vaccine.childVaccineId === data.id) {
                    return {...vaccine, isDone: true, dateWhenDone: data.dateWhenDone?.toString?.() || 'Astazi'};
                }
                return vaccine;
            })
            setVaccineList(computedVaccines);
        }
        const computedData = {...data, dateWhenDone: new Date()};
        console.warn({ computedData });
        await put(`/api/child_vaccine`, {data: computedData}, successCb);
    }
    
    useEffect(() => {
        getVaccineList().then();
    }, [child]);
    
    return (
        <MedModal
            isOpen={isOpen}
            title={`${child.firstName} ${child.lastName}`}
            closeButtonCallback={() => typeof closeModalCallback === "function" ? closeModalCallback() : ''}
        >
            <ChildPanelContent
                childrenVaccines={[vaccineList]}
                index={0}
                child={{}}
                childId={''}
                forMedic={true}
                updateVaccineCB={updateVaccineState}
            >
            </ChildPanelContent>
        </MedModal>
    )
}

export default ChildVaccineModal;