import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import ScheduleItem from "./ScheduleItem.jsx";
import "./Schedule.scss";

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
                      abbreviation={vc.abbreviation || vc.name}
                      childVaccineDate={vc.childVaccineDate}
                      childVaccineId={vc.childVaccineId}
        />)

    return (
            <div className={"background-mesaj"}>
                <div>
                    {vaccineChildList}
                </div>
            </div>

    )
}

export default Schedule;