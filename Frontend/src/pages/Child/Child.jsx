import ChildModal from "./ChildModal.jsx";
import {useEffect, useState} from "react";
import TabView from "../../components/TabView/TabView.jsx";
import useRequest from "../../hooks/useRequest.js";
import TabPanel from "../../components/TabView/TabPanel.jsx";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import ChildAddModal from "./ChildAddModal.jsx";
import MedButton from "../../components/button/MedButton";
function Child() {

    const [isModalOpen, setModalState] = useState(false);
    const [isAddModalOpen, setAddModalState] = useState(false);
    const {get} = useRequest();
    const [childrenList, setChildrenList] = useState([]);

    const parentId = useSelector(getToken);
    function updateChild(){
        setModalState(!isModalOpen);
    }
    function addChild(){
        setAddModalState(!isAddModalOpen);
    }

    useEffect( ()=>{

        async function getChildrenForParent(){
            const res = await get(`/api/parent/children/${parentId}`)
            console.log( res.data)
            setChildrenList(res.data || [])
        }
        if(parentId){
            getChildrenForParent().then();
        }

    }, [parentId])

    return (
        <div>
            <h1>
                All My Children
                <ChildAddModal isModalOpen={isAddModalOpen}
                               closeButtonCallback={() => setAddModalState(!isAddModalOpen)}
                               parentId={parentId}/>
                <MedButton label={"Adauga copil"}
                           circle={true}
                           variant={"primary"}
                           size={"medium"}
                           onClick={addChild}/>
            </h1>
            <TabView activeTab={0}>
                {childrenList.map(
                m =>
                <TabPanel title={m.firstName} key={m.id}>
                    <ChildModal isModalOpen={isModalOpen}
                                closeButtonCallback={() => setModalState(!isModalOpen)}
                                children={m}/>
                    <MedButton label={"Modifica copil"}
                               circle={true}
                               variant={"primary"}
                               size={"medium"}
                               onClick={updateChild}/>
                </TabPanel>
                )}
            </TabView>

        </div>
    )
}

export default Child;