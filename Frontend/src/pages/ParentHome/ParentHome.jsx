import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import {useEffect, useState} from "react";

const ParentHome = () => {
    const [children, setChildren] = useState([]);
    const {get} = useRequest();
    const parentId = useSelector(getToken);
    const getChildren = () => { get(
        `api/parent/children/${parentId}`,
        {},
        ({data}) => setChildren(data || [])
    )};
    useEffect(() => getChildren(), [parentId]);
    return (<div>ParentHome page</div>)
};

export default ParentHome;