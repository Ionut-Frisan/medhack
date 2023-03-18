import ChildModal from "./ChildModal.jsx";
import {useEffect, useState} from "react";
import TabView from "../../components/TabView/TabView.jsx";
import useRequest from "../../hooks/useRequest.js";
import TabPanel from "../../components/TabView/TabPanel.jsx";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import ChildAddModal from "./ChildAddModal.jsx";
import MedButton from "../../components/button/MedButton";
import {FaPlus} from "react-icons/all.js";

function Child() {

    const [isModalOpen, setModalState] = useState(false);
    const [isAddModalOpen, setAddModalState] = useState(false);
    const {get} = useRequest();
    const {del} = useRequest();
    const [childrenList, setChildrenList] = useState([]);

    const parentId = useSelector(getToken);

    function updateChild() {
        setModalState(!isModalOpen);
    }

    function addChild() {
        setAddModalState(!isAddModalOpen);
    }


    useEffect( ()=>{

        async function getChildrenForParent(){
            const res = await get(`/api/parent/children/${parentId}`)
            setChildrenList(res.data || [])
        }
        if(parentId){
            getChildrenForParent().then();
        }

    }, [parentId])

    console.warn(childrenList);

    const deleteChild = async (event, childId) => {
        event.preventDefault();
        const res = await del(`/api/child/${childId}`)
    }
    return (
        <div>
            <h1>
                All My Children
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
                               onClick={updateChild}
                    />
                    <MedButton label={"Sterge copil"}
                               circle={true}
                               variant={"primary"}
                               size={"medium"}
                               onClick={(e)=>deleteChild(e, m.id)}
                    />
                </TabPanel>
                )}
                <TabPanel icon={FaPlus}>
                    <ChildAddModal parentId={parentId}></ChildAddModal>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default Child;