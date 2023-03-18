import ChildModal from "./ChildModal.jsx";
import {useEffect, useState} from "react";
import TabView from "../../components/TabView/TabView.jsx";
import useRequest from "../../hooks/useRequest.js";
import TabPanel from "../../components/TabView/TabPanel.jsx";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
function Child() {

    const [isModalOpen, setModalState] = useState(false);
    const {get} = useRequest();
    const parentId = useSelector(getToken)
    const [childrenList, setChildrenList] = useState([]);

    function updateChild(){
        setModalState(!isModalOpen);
    }

    useEffect( ()=>{
        async function getChildrenForParent(){
            const res = await get(`/api/parent/children/${parentId}`)
            console.log( res.data)
            setChildrenList(res.data)
        }
        getChildrenForParent().then();

    }, [])

    return (
        <div>
            <h1>
                Child
            </h1>
            <TabView activeTab={0}>
                {childrenList.map(
                m =>
                <TabPanel title={m.firstName} key={m.id}>
                    <ChildModal isModalOpen={isModalOpen}
                                closeButtonCallback={() => setModalState(!isModalOpen)}
                                children={m}/>
                    <button onClick={updateChild}> Update Child </button>
                </TabPanel>
                )}
            </TabView>

        </div>
    )
}

export default Child;