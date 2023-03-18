import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {Carousel} from 'react-responsive-carousel';
import UserImage from "../../components/user-image/UserImage.jsx";
import './ParentHome.scss';

const ChildCard = ({child}) => {
    const [vaccineList, setVaccineList] = useState([]);
    const {get} = useRequest();
    const getVaccines = async () => {
        await get(`/api/child_vaccine/${child.id}`, {}, ({data}) => setVaccineList(data));
    }
    useEffect(() => {
        getVaccines().then().catch();
        console.warn(vaccineList);
    }, [child])
    
    
    const childName = `${child.firstName || ''} ${child.lastName || ''}`;

    return (
        <div className={'child-card'}>
           <UserImage src="https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000" alt="Child profile picture"/>
            <div className={'child-info'}>
                <h2>{childName}</h2>
                <p>{child.dateOfBirth}</p>
                <p>{child.cnp}</p>
                <p>{child.gender}</p>
            </div>
            <div class={'child-vaccin-carousel'}></div>
        </div>
    )
};

export default ChildCard;