import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import {useEffect, useState} from "react";
import ChildCard from "./ChildCard.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ParentHome = () => {
    const [children, setChildren] = useState([]);
    const {get} = useRequest();
    const parentId = useSelector(getToken);

    const getChildren = () => {
        if(!!parentId){
            get(
            `api/parent/children/${parentId}`,
            {},
            ({data}) => setChildren(data || [])
            )
        }
    };
    useEffect(() => getChildren(), [parentId]);

    useEffect(() => {
        const popNotification = async () => {
            const res = await get(`api/parent/getNextVaccine/${parentId}`)
            return res.data;
        }
        if(parentId){
            popNotification().then(data => {
                const date = new Date(data.childVaccineDate);
                const today = new Date();
                let message = ""
                if(date.getTime() < today.getTime()){
                    message = `Ati avut o programare pentru ${data.abbreviation || data.name} in data de ${data.childVaccineDate}.`
                    toast.error(message);
                } else {
                    message = `Aveti o programare pentru ${data.abbreviation || data.name} in data de ${data.childVaccineDate}.`;
                    toast.info(message);
                }

            });
        }

    },[parentId]);
    
    const childrenList = children.map((child) => {
        return <ChildCard child={child}></ChildCard>
    })
    
    return (
        <div>
            <ToastContainer />
            <div className={'child-list-main'}>
                {childrenList}
            </div>)
        </div>
    )
};

export default ParentHome;