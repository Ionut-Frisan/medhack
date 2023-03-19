import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import ScheduleItem from "./ScheduleItem.jsx";

function Schedule() {
    const [vaccineChild, setVaccineChild] = useState([]);
    const {get} = useRequest();
    const doctorId = useSelector(getToken);

    useEffect(() => {
        const getNextVaccines = async () => {
            const res = await get(`/api/vaccine/getNextVaccines/${doctorId}`);
            setVaccineChild(res.data);
        }
        if(doctorId){
            getNextVaccines().then();
        }

    },[doctorId]);

    const vaccineChildList = vaccineChild.map(vc =>
        <ScheduleItem key={vc.childVaccineId}
                      abbreviation={vc.abbreviation}
                      childVaccineDate={vc.childVaccineDate}
                      childVaccineId={vc.childVaccineId}
        />)

    return (
        <div>
            {vaccineChildList}
        </div>

    )
}

export default Schedule;