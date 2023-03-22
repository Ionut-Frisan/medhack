import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest.js";
import { Carousel } from 'react-responsive-carousel';
import UserImage from "../../components/user-image/UserImage.jsx";
import './ParentHome.scss';

const ChildCard = ({ child }) => {
    const [vaccineList, setVaccineList] = useState([]);
    const { get } = useRequest();
    const getVaccines = async () => {
        await get(`/api/child_vaccine/${child.id}`, {}, ({ data }) => setVaccineList(data));
    }
    useEffect(() => {
        getVaccines().then().catch();
        console.warn(vaccineList);
    }, [child])

    const getVaccineStatus = (vaccine) => {
        const {
            isDone,
            dateWhenDone,
            childVaccineDate = '',
        } = vaccine;
        if (dateWhenDone) {
            return <span>Stare: <span
                className={'tag-success'}>Administrat</span>
                <br />Dată vaccin: {vaccine.dateWhenDone}
                <br />Dată administrare: <span
                    className={'tag-success'}>{dateWhenDone}
                </span>
            </span>
        }
        // const dateParts = childVaccineDate.split('-');
        const recommendedDate = new Date(Date.parse(childVaccineDate));// new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) -1, parseInt(dateParts[2]));
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (today < recommendedDate) {
            return <span> Stare: <span className={'tag-warning'}>Trebuie administrat</span><br />Dată recomandată: <span
                className={'tag-warning'}>{childVaccineDate}</span></span>
        }
        return <span>Stare: <span className={'tag-error'}>Lipsește</span><br />Dată recomandată: <span
            className={'tag-error'}>{childVaccineDate}</span></span>
    }

    const childName = `${child.firstName || ''} ${child.lastName || ''}`;

    return (
        <div className={'child-card'}>
            <UserImage
                src="https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000"
                alt="Child profile picture" />
            <div className={'child-info'}>
                <h2>{childName}</h2>
                <p>{child.dateOfBirth}</p>
                <p>{child.cnp}</p>
                <p>{child.gender}</p>
            </div>
            <div className={'child-vaccine-carousel'}>
                <Carousel
                    showStatus={false}
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                >
                    {vaccineList.map(vaccine => {
                        return (
                            <div className={'vaccine-carousel'}>
                                <h2>{vaccine.name}</h2>
                                {getVaccineStatus(vaccine)}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
};

export default ChildCard;