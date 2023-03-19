import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
const ChildVaccineInfo = ({child, vaccineId}) => {
    const [vaccineInfo, setVaccineInfo] = useState({});
    const {get} = useRequest();
    useEffect(() => {
        const getVaccineInfo = async () => {
            await get(`/api/vaccine/${vaccineId}`, {}, ({data}) => setVaccineInfo(data));
        };
        if (vaccineId) {
            getVaccineInfo().then();
        }
    }, [vaccineInfo]);
    
    return (
        <div>
            child info page vaccine
        </div>
    )
};

export default ChildVaccineInfo;