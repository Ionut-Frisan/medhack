import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import {useEffect, useState} from "react";
import ChildCard from "./ChildCard.jsx";

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
    
    const childrenList = children.map((child) => {
        return <ChildCard child={child}></ChildCard>
    })
    
    return (<div className={'child-list-main'}>{childrenList}</div>)
};

export default ParentHome;